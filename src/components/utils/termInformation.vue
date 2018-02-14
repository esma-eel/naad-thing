<template>
    <div class="term-informatio">
        <div class="box my-warning">
            <div class="content">
                <h4>{{ title }}</h4>
                <hr>
                <p>شماره ترم(نیم سال):{{ informations.term_number }}</p>
                <p>تعداد واحد اخذ شده : {{ informations.unit_n }}</p>
            </div>
            <hr>
            <div class="level is-mobile">

                <div class="level-item has-text-centered">
                    <div>
                        <b-tooltip label="برنامه هفتگی" position="is-bottom" class="is-success">
                            <a class="button is-danger" @click="barname_haftegi_open = true">
                                <b-icon pack="fas" icon="th-list" size="is-normal"></b-icon>
                            </a>
                        </b-tooltip>
                    </div>
                </div>

                <div class="level-item has-text-centered">
                    <div>
                        <b-tooltip label="مشاهده کارنامه" position="is-bottom" class="is-success">
                            <a class="button is-danger">
                                <b-icon pack="fas" icon="list" size="is-normal"></b-icon>
                            </a>
                        </b-tooltip>
                    </div>
                </div>


                <div class="level-item has-text-centered">
                    <div>
                        <b-tooltip label="حذف و اضافه" position="is-bottom" class="is-success">
                            <a class="button is-danger">
                                <b-icon pack="fas" icon="low-vision" size="is-normal"></b-icon>
                            </a>
                        </b-tooltip>
                    </div>
                </div>

                <div class="level-item has-text-centered">
                    <div>
                        <b-tooltip label="ارسال اعتراض" position="is-bottom" class="is-success">
                            <a class="button is-danger">
                                <b-icon pack="fas" icon="life-ring" size="is-normal"></b-icon>
                            </a>
                        </b-tooltip>
                    </div>
                </div>
            </div>
        </div>
        <!-- modal section -->
        <b-modal :active.sync="barname_haftegi_open">
            <div class="box">
                <div class="content">
                    <b-table :data="barname_haftegi_data" :columns="barname_haftegi_columns"></b-table>
                </div>
            </div>
        </b-modal>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'اطلاعات ترم',
                informations: {
                    term_number: 962,
                    unit_n: 18,
                },
                barname_haftegi_open: false,
                barname_haftegi_data: [{
                        'day': 'شنبه',
                        'from_7_to_9': ' ریاضی مهندسی',
                        'from_9_half_to_11': 'مدار منطقی',
                        'from_11_half_to_13': 'ورزش 2',
                        'from_14_to_17': 'آزمایشگاه فلان'
                    },
                    {
                        'day': 'یکشنبه',
                        'from_7_to_9': 'طراحی الگوریتم',
                        'from_9_half_to_11': 'آمار و احتمالات مهندسی',
                        'date': 'ورزش 2',
                        'from_14_to_17': 'آزمایشگاه فلان'
                    },
                    {
                        'day': 'دوشنبه',
                        'from_7_to_9': 'اندیشه اسلامی 2',
                        'from_9_half_to_11': 'هوش مصنوعی',
                        'from_11_half_to_13': 'ورزش 2',
                        'from_14_to_17': 'آزمایشگاه فلان'
                    },
                    {
                        'day': 'سه شنبه',
                        'from_7_to_9': 'زبان تخصصی',
                        'from_9_half_to_11': 'طراحی وب',
                        'from_11_half_to_13': 'ورزش 2',
                        'from_14_to_17': 'آزمایشگاه فلان'
                    },
                    {
                        'day': 'چهارشنبه',
                        'from_7_to_9': 'برنامه سازی',
                        'from_9_half_to_11': 'ساختمان داده',
                        'from_11_half_to_13': 'ورزش 2',
                        'from_14_to_17': 'آزمایشگاه فلان'
                    }
                ],
                barname_haftegi_columns: [{
                        field: 'day',
                        label: 'روز',
                        width: '40',
                        numeric: true,
                        centered: true
                        
                    },
                    {
                        field: 'from_7_to_9',
                        label: 'از 7:30 تا 9',
                        centered: true
                    },
                    {
                        field: 'from_9_half_to_11',
                        label: 'از 9:30 تا 11',
                        centered: true
                    },
                    {
                        field: 'from_11_half_to_13',
                        label: 'از 11:30 تا 13',
                        centered: true
                    },
                    {
                        field: 'from_14_to_17',
                        label: 'از 14 تا 17',
                        centered: true
                    }
                ],
            }
        },

    }
</script>

<style lang="scss" scoped>
</style>