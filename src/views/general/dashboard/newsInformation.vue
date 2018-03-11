<template>
    <div class="news-informatio">
        <div class="box">
            <div class="content">
                <h4>{{ title }} <span class="is-pulled-left"> <a href="#!" class="button is-outlined is-danger">بیشتر</a></span></h4>
                <hr>
                <ul class="my-news-ul ">
                    <li v-for="news in newInfo" :key="news.nTitle">
                        <div class="box  my-primary">
                            <div class="media ">
                                <div class="media-content">
                                    <div class="content">
                                        <h3 class="has-text-right">{{ news.nTitle }}</h3>
                                        <p class="has-text-right">{{ news.nText }}</p>
                                    </div>
                                    <hr>
                                    <nav class="level is-mobile ">
                                        <div class="level-left">
                                            <a class="level-item">
                                                {{ news.nDate }}
                                            </a>
                                            <a class="level-item">
                                                {{ news.nTime }}
                                            </a>
                                            <a class="level-item has-text-dark">
                                                <span>نوع :‌</span>{{ news.nType }}
                                            </a>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>               
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: 'آخرین اطلاعیه ها',
                newInfo: [{
                        nType: 'اطلاعیه',
                        nTitle: 'عدم تشکیل کلاس استاد غلامی',
                        nText: ' به اطلاع دانشجویان محترم میرساند که کلاس ساعت ۸ با کد ارايه ۲۵۵۲ استاد غلامی تشکیل نمیشود',
                        nDate: '۲۸/۱۱/۲',
                        nTime: '۲۲:‌۴۶',
                    },
                    {
                        nType: 'اطلاعیه',
                        nTitle: 'عدم تشکیل کلاس استاد دشتی',
                        nText: ' به اطلاع دانشجویان محترم میرساند که کلاس ساعت ۸ با کد ارايه ۲۵۵۲ استاد دشتی تشکیل نمیشود',
                        nDate: '۲۸/۱۱/۲',
                        nTime: '۲۲:‌۴۶',
                    },
                    {
                        nType: 'اطلاعیه',
                        nTitle: 'عدم تشکیل کلاس استاد مشتی',
                        nText: ' به اطلاع دانشجویان محترم میرساند که کلاس ساعت ۸ با کد ارايه ۲۵۵۲ استاد مشتی تشکیل نمیشود',
                        nDate: '۲۸/۱۱/۲',
                        nTime: '۲۲:‌۴۶',
                    },
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>
    .my-news-ul {
        list-style-type: none;
        direction: rtl;

    }
</style>