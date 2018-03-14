<template>
    <div>
        <div class="box my-light">
            <form action="">
                <div class="columns">
                    <div class="column">
                        <b-field grouped horizantal>
                            <b-field label="جهت ارائه به">
                                <b-input placeholder="نام سازمان یا ... را وارد کنید" v-model="eraeBe" required></b-input>
                            </b-field>

                            <b-field label="تاریخ تولد" class="has-text-right my-1em-margin">
                                <b-datepicker placeholder="انتخاب کنید" icon="calendar-today" v-model="birthDate" required>
                                </b-datepicker>
                            </b-field>


                            <b-field label="نوع درخواست">
                                <b-select placeholder="انتخاب کنید" v-model="typeofRequestSelected" class="has-text-right" required>
                                    <option v-for="option in typeofRequest" :value="option.name" :key="option.id">
                                        {{ option.name }}
                                    </option>
                                </b-select>
                            </b-field>
                            <div>
                                <button class="button is-warning my-top-px-margin" @click="addReq">ثبت</button>
                            </div>
                        </b-field>

                    </div>
                </div>
            </form>
        </div>

        <hr>

        <div class="box my-info">
            <b-table :data="tdata" :opened-detailed="defaultOpenedDetails" detailed detail-key="id" @details-open="(row, index) => $toast.open(`باز کردن ${row.id}`)">

                <template slot-scope="props">
                    <b-table-column label="#" width="40" numeric>
                        {{ props.row.id }}
                    </b-table-column>

                    <b-table-column label="نوع درخواست" centered>
                        {{ props.row.typeof_request }}
                    </b-table-column>

                    <b-table-column label="تاریخ ارسال" centered>
                        {{ new Date().toLocaleDateString() }}
                    </b-table-column>

                    <b-table-column label="آخرین مرحله" centered>
                        {{ props.row.last_step }}
                    </b-table-column>

                    <b-table-column label="وضعیت" centered>
                        {{ props.row.status }}
                    </b-table-column>
                </template>

                <template slot="detail" slot-scope="props">
                    <article class="media">
                        <div class="media-content">
                            <div class="content has-text-right">
                                <p>
                                    <strong>نوع درخواست :‌ {{ props.row.typeof_request }}</strong>
                                    <small>{{new Date().toLocaleDateString()}} @</small>
                                    <br> جناب آقای "ناشناس" در واحد {{props.row.last_step}} درخواست شما را بررسی میکنند.
                                </p>
                            </div>
                        </div>
                    </article>
                </template>
            </b-table>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                eraeBe: '',
                birthDate: '',
                typeofRequestSelected: {},
                idGen: 1,
                defaultOpenedDetails: [],
                typeofRequest: [{
                        id: 1,
                        name: 'اشتغال به تحصیل'
                    },
                    {
                        id: 2,
                        name: 'چیز دیگری'
                    },
                ],
                tdata: [{
                        'id': 1,
                        'typeof_request': 'مثال',
                        'dateof_sent_request': '',
                        'last_step': 'امور مالی',
                        'status': 'در حال بررسی'
                    },

                ],
                columns: [{
                        field: 'id',
                        label: '#',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'typeof_request',
                        label: 'نوع درخواست',
                        centered: true
                    },
                    {
                        field: 'dateof_sent_request',
                        label: 'تاریخ ارسال درخواست',
                        centered: true
                    },
                    {
                        field: 'last_step',
                        label: 'آخرین مرحله',
                        centered: true
                    },
                    {
                        field: 'status',
                        label: 'وضعیت',
                        centered: true
                    }
                ]
            }
        },
        methods: {
            addReq() {
                if (this.eraeBe.length <= 0 || this.birthDate.length <= 0 || this.typeofRequestSelected.length <= 0) {
                    alert('همه فیلد ها لازم است پر باشند');
                } else {
                    this.tdata.push({
                        'id': this.idGen + 1,
                        'typeof_request': this.typeofRequestSelected,
                        'dateof_sent_request': '96/22/10',
                        'last_step': 'بررسی امور مالی',
                        'status': 'درحال بررسی'
                    });
                    this.idGen += 1;
                }
            }

        }


    }
</script>

<style lang="scss">
    .dropdown-menu,
    .dropdown-content,
        {
        text-align: right;
        direction: rtl;
        right: 0;
        left: auto;
    }

    .my-1em-margin {
        margin-right: 1em;
    }

    .my-top-px-margin {
        margin-top: 2em;
    }
</style>