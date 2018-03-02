<template>
    <div class="setting">
        <div class="columns">
            <div class="column">
                <template>
                    <b-message title="پیام سیستم" type="is-success" :active="isAnyThingChanged" class="has-text-right" style="direction: rtl">
                        <p class="has-text-right">
                            تغییرات شما با موفقیت ثبت شد.
                        </p>
                    </b-message>
                </template>

                <div class="box">
                    <div class="content">
                        <h4 class="is-size-4 has-text-weight-bold">{{ title }}</h4>

                        <br>
                        <form>
                            <div class="switch-theme has-text-right">
                                <b-field label="انتخاب تم">
                                    <b-select placeholder="یک تم انتخاب کنید" class=" has-text-right" v-model="selectedTheme">
                                        <option v-for="option in selectThemeOptions" :value="option" :key="option.class" :selected="selectedTheme" @click="selectedThemeObject = option">
                                            {{ option.name }}
                                        </option>
                                    </b-select>
                                </b-field>
                            </div>
                            <br>
                            <div class="field  has-text-right">
                                <label>فعال بودن اعلان ها :‌ </label>
                                <b-switch v-model="setting.isNotifOn" style="direction: ltr">
                                    <template v-if="setting.isNotifOn">
                                        بله
                                    </template>
                                    <template v-else>
                                        خیر
                                    </template>
                                </b-switch>
                            </div>
                            <br>
                            <div class="field ">
                                <div class="control has-text-right">
                                    <button class="button is-primary" type="submit" @click="handleSubmitSetting">ثبت تغییرات</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';

    export default {
        data() {
            return {
                title: 'تنظیمات',
                selectedTheme: {
                    name: 'مشکی - پیشفرض',
                    class: 'default-theme',
                    id: 2,
                    selected: false,
                },
                isAnyThingChanged: false,
                
                setting: {
                    isNotifOn: true,
                }
            }
        },
        methods: {
            ...mapActions([
                'setTheme',
            ]),
            handleSubmitSetting() {
                if (this.setting.isNotifOn || this.selectedTheme.length > 0) {
                    this.setTheme(this.selectedTheme);
                    this.isAnyThingChanged = true;

                }
            }
        },
    computed: {
        ...mapGetters([
            'theme',
            'selectThemeOptions'
        ]),
    }
        ,

        watch: {
            isAnyThingChanged() {
                setTimeout(() => {
                    this.isAnyThingChanged = false;
                }, 4 * 1000);
            }
        },

        created() {
            if (this.isAnyThingChanged === true) {
                this.isAnyThingChanged = false;
            }

            this.selectedTheme = this.theme;
        }
    }
</script>

<style lang="scss" scoped>
</style>