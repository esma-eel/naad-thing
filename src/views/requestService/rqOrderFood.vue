<template>
    <section>

        <template>
            <b-message title="پیام سیستم" type="is-info" :active="showMessage" class="has-text-right" style="direction: rtl">
                <p class="has-text-right">
                    {{warningText}}
                </p>
            </b-message>
        </template>

        <b-tag type="is-info" size="is-large">شارژ حساب شما {{getCharge}} </b-tag>

        <button class="button field is-success" @click="submitSelectedFood" :disabled="selected.length == 0">
            <span>سفارش انتخاب شده ها</span>
        </button>

        <div class="box my-light">
            <b-tabs>
                <b-tab-item label="لیست غذاهای هفته اول">
                    <b-field grouped group-multiline>
                        <b-select v-model="perPage" :disabled="!isPaginated">
                            <option value="5">5 در هر صفحه</option>
                            <option value="10">10 در هر صفحه</option>
                            <option value="15">15 در هر صفحه</option>
                            <option value="20">20 در هر صفحه</option>
                        </b-select>
                        <div class="control" >
                            <button class="button" @click="currentPage = 2" :disabled="!isPaginated">برو به صفحه ۲</button>
                        </div>
                        <div class="control is-flex little-marg-right">
                            <b-switch v-model="isPaginated" style="direction: ltr">صفحه بندی کردن</b-switch>
                        </div>
                        <div class="control is-flex little-marg-right">
                            <b-switch v-model="isPaginationSimple" :disabled="!isPaginated" style="direction: ltr">صفحه بندی ساده</b-switch>
                        </div>
                    </b-field>

                    <b-table :data="getFoodsList" :columns="columns" :checked-rows.sync="selected" :checkable="asIsay" :paginated="isPaginated"
                        :per-page="perPage" :current-page.sync="currentPage" :pagination-simple="isPaginationSimple"></b-table>

                </b-tab-item>
                <b-tab-item label="روز های رزرو شده">
                    <b-table :data="getOderedFood" :columns="columns" class="has-text-centered">
                    </b-table>
                </b-tab-item>

            </b-tabs>
        </div>
    </section>
</template>

<script>
    import {
        mapGetters
    } from 'vuex';

    import {
        mapActions
    } from 'vuex';

    export default {
        data() {

            return {
                isPaginated: true,
                isPaginationSimple: false,
                currentPage: 1,
                perPage: 5,
                warningText: 'سفارش شما انجام شد.',
                selected: [],
                asIsay: true,
                showMessage: false,
                showDelMessage: false,
                columns: [{
                        field: 'day',
                        label: 'روز',
                        width: '50',
                        numeric: true
                    },
                    {
                        field: 'food_name',
                        label: 'نام غذا',
                        centered: true
                    },
                    {
                        field: 'price',
                        label: 'قیمت',
                        centered: true
                    },
                    {
                        field: 'date',
                        label: 'تاریخ',
                        centered: true
                    },

                ]
            }
        },
        computed: {
            ...mapGetters([
                'getFoodsList',
                'getOderedFood',
                'getCharge',
            ]),
        },
        watch: {
            showMessage() {
                setTimeout(() => {
                    this.showMessage = false;
                }, 3 * 1000);

            },
            warningText() {
                setTimeout(() => {
                    this.warningText = 'سفارش شما انجام شد.';
                }, 4 * 1000);
            },
        },
        methods: {
            ...mapActions([
                'reserveFood',
                'dechargeAcc',
            ]),
            submitSelectedFood() {

                let tekrariNist = [];
                if (this.getOderedFood.length > 0) {
                    tekrariNist = this.selected.filter((element) => {
                        if (this.getOderedFood.includes(element)) {
                            alert(`قبلا رزرو شده است`)
                        } else {
                            return element;
                        }
                    });
                    tekrariNist.forEach(els => {
                        if (els.price <= Number(this.getCharge)) {
                            this.dechargeAcc(els.price);
                            this.reserveFood(els);
                        } else {
                            this.warningText = 'خطا : شارژ حساب شما کافی نیست.'
                        }
                        
                    })
                } else {
                    this.selected.forEach(elemetn => {
                       if (elemetn.price <= Number(this.getCharge)) {
                            this.dechargeAcc(elemetn.price);
                            this.reserveFood(elemetn);
                        } else {
                            this.warningText = 'خطا : شارژ حساب شما کافی نیست.'
                        }
                    })

                }

                this.showMessage = true;

                this.selected = [];

            },
        }
    }
</script>

<style lang="scss" scoped>
.little-marg-right {
    margin-right: 1em;
}
</style>