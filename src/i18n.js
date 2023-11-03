import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeeValue: false,
    },
    resources: {
        en: {
            translation: {
                navi: {
                    home: 'Home',
                    about: 'About',
                    gallery: 'Gallery',
                    contact: 'Contact'
                },
                anouncement: 'I am back in Kyoto!',
                headline: 'Traditional Japanese Tattoo',
                aboutText: 'Hi, my name is SEZUKI! I am a tattoo artist from Tokyo with over 30 years of experience. I am currently tattooing in my newly opened studio in Kyoto or in Germany.',
                aboutText2: 'As one of the first female, japanese tattoo artists, I learned tattooing from [Name of Sensei] and after tattooing in Japan for over 20 years, I opened my own studio in Bremen, Germany. Now I am coming back to Japan but will occasionally tattoo around Europe as a guest-artist.',
                contactBtn: 'contact me',
                studio: {
                    name: 'Studio Name',
                    text: "For around six month a year, you can find me at my studio in Kyoto. The studio is just two minutes away from xy station. You will receive the excact address after making an appointment. The other six month I will be visiting other studios around Europe. For further information and schedule, please contact me or visit my social media like "
                },
                art: {
                    header: 'Artworks',
                    paragraph1: 'If you are interested in artworks, prints or my newly launched clothing brand, please follow the links down below.',
                    paragraph2: 'Every artworks is handcrafted and and only available in limited amounts. Once it is sold-out, it will stay sold-out!',
                    paragraph3: 'My new fashion label Brandname takes old, traditional Kimonos and gives them new life my upcycling them into hand-bags or japanese inspired urban streetwear.',
                    artLink: 'Buy a unique artwork',
                    fashionLink: 'Check out my fashion label'
                },
                contact: {
                    header: 'Contact me',
                    note: {
                        header: 'PLEASE READ BEFORE MAKING AN INQUIRY',
                        text: 'I only do custom artworks. No artworks from other artists or websites like Pinterest. For reference or expressing your idea it is of course okay to send artworks. Furthermore, please make sure that you are atleast 21 years or older and want a tattoo that fits my style. I will not do any tattoos in styles that do not match mine.'
                    },
                    form: {
                        name: 'Name',
                        namePlaceholder: 'John Doe',
                        mail: 'E-Mail',
                        mailPlaceholder: 'john.doe@yourmail.com',
                        phone: 'Phone',
                        message: 'Message',
                        messagePlaceholder: 'desired motive, area, color, date',
                        send: 'send',
                        success: 'Thank you for your request! I will message you back as soon as possible.'
                    }
                }

            }
        },
        jp: {
            translation: {
                navi: {
                    home: '家',
                    about: 'について',
                    gallery: 'ギャラリー',
                    contact: '接触'
                },
                anouncement: '京都に戻ってきた！',
                headline: '日本の伝統的なタトゥー',
                aboutText: 'こんにちは、SEZUKIです!私は東京出身のタトゥーアーティストで、30年の経験があります。現在は京都かドイツに新しくオープンしたスタジオでタトゥーを入れています。',
                aboutText2: '女性初の日本人タトゥーアーティストの一人として、[先生の名前]からタトゥーを学び、日本で20年以上タトゥーに携わった後、ドイツのブレーメンに自分のスタジオをオープンしました。現在は日本に帰国していますが、ゲストアーティストとして時々ヨーロッパ各地でタトゥーを彫っています。',
                contactBtn: 'お問い合わせ',
                studio: {
                    name: 'スタジオ名',
                    text: "年に6ヶ月ほど、私は京都のスタジオにいます。スタジオはXY駅から徒歩2分です。住所は予約後にお知らせします。残りの6ヶ月はヨーロッパ各地のスタジオを訪れます。詳細やスケジュールについては、私に連絡するか、私のソーシャルメディアの「いいね!」をご覧ください："
                },
                art: {
                    header: '芸術作品',
                    paragraph1: 'アートワーク、プリント、そして私が新しく立ち上げたアパレル・ブランドにご興味のある方は、以下のリンクからどうぞ。',
                    paragraph2: '作品はすべて手作りで、数に限りがあります。売り切れ次第終了となります！',
                    paragraph3: '私の新しいファッション・レーベル、ブランドネームは、古い伝統的な着物を、ハンドバッグや日本風のアーバン・ストリートウェアにアップサイクルして、新しい命を吹き込む。',
                    artLink: 'ユニークな作品を買う',
                    fashionLink: 'ファッション・レーベルをチェック'
                },
                contact: {
                    header: 'お問い合わせ',
                    note: {
                        header: 'お問い合わせの前にお読みください',
                        text: '私はカスタムメイドの作品しか制作しません。他のアーティストの作品やPinterestのようなウェブサイトからの作品はお断りします。参考のため、またはあなたのアイデアを表現するために作品を送ることはもちろん構いません。さらに、あなたが少なくとも21歳以上で、私のスタイルに合ったタトゥーを希望していることを確認してください。私のスタイルに合わないスタイルのタトゥーはしません。'
                    },
                    form: {
                        name: '名称',
                        namePlaceholder: '山田花子',
                        mail: 'メール',
                        mailPlaceholder: 'yamada.hanako@yourmail.jp',
                        phone: '電話番号',
                        message: 'メッセージ',
                        messagePlaceholder: '希望するモチーフ、エリア、色、日付',
                        send: '送る',
                        success: 'リクエストありがとうございます！できるだけ早くお返事を差し上げます。'
                    }
                }
            }
        }



    }
});

export default i18n;