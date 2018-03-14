<template>
    <section class="rqEteraz">
        <template>
            <b-message title="پیام سیستم" type="is-success" :active="showMessage" class="has-text-right" style="direction: rtl">
                <p class="has-text-right">
                    پیام شما با موفقیت ارسال شد.
                    در بخش پیام ها میتوانید پاسخ استاد خود را ببینید.
                </p>
            </b-message>
        </template>


        <h4 class="is-size-4 ">ارسال اعتراض</h4>
        <br>
        <div class="box my-light my-center-div">
            <form action="">
                <b-field horizontal label="عنوان" message="لطفا یک عنوان انتخاب کنید">
                    <b-input  expanded v-model="req.titleOfMessage" required></b-input>
                </b-field>

                <b-field horizontal label="به" message="نام استاد را بنوسید">
                    <b-input  placeholder="مثلا:‌استاد ..." v-model="req.toWhichPerson" expanded required></b-input>
                    
                </b-field>

                <b-field horizontal label="موضوع" message="نوع پیام خود را مشخص کنید">
                    <b-select placeholder="یک موضوع را انتخاب کنید" v-model="req.topic" class="has-text-right" required>
                        <option value="1">اعتراض به نمره</option>
                        <option value="2">درخواست نمره</option>
                        <option value="3">گریه و زاری</option>
                    </b-select>
                </b-field>

                 <b-field horizontal label="برای درس" message="نام درس مورد نظر را بنویسید" v-if="Number(req.topic) === 1">
                    <b-input  expanded v-model="req.darseMoredeNazar" required></b-input>
                </b-field>

                <b-field horizontal label="پیام" message="پیام خود را بنوسید">
                    <b-input type="textarea"  v-model="req.messageText"  required></b-input>
                </b-field>

                <b-field horizontal>
                    <!-- Label left empty for spacing -->
                    <p class="control has-text-right">
                        <button type="submit" class="button is-primary" @click="sendEteraz" :disabled="allAreFilled">
                            ارسال اعتراض
                        </button>
                    </p>
                </b-field>
            </form>
        </div>

    </section>
</template>

<script>
    export default {
        data() {
            return {
                showMessage: false,
                req : {
                    topic: '',
                    toWhichPerson: '',
                    titleOfMessage: '',
                    messageText: '',
                    darseMoredeNazar: '',
                }
            }
        }, 
        methods: {
            sendEteraz() {
                this.showMessage = true;
            },
        },
        watch:{
            showMessage() {
                setTimeout(() => {
                    this.showMessage = false;
                }, 3*1000);
            }
        },
        computed: {
            allAreFilled() {
                if (this.req.topic.length > 0 && this.req.toWhichPerson.length > 0 && this.req.messageText.length > 0 && this.req.titleOfMessage.length > 0) {
                    return false;
                } else {
                    return true;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>