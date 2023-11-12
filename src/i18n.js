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
                headline: 'japanese x custom tattoo',
                aboutText: 'I have been immersed in painting since childhood, and 28 years have passed since I became an apprentice at the age of 24. Still never forgetting my original intention, I have traveled all over the world to pursue the unique beauty of tattooing and to improve my technique. I chose Kyoto, my favorite city in Japan, as my final workplace.',
                aboutText2: 'We are looking forward to the once-in-a-lifetime encounter with tattoos to those who have had a relationship with us in the past or who will have a relationship with us in the future.',
                newsHeader: 'Guest Artists',
                guest: {
                    name: 'Guest Name',
                    description1: '“Guest artists” will visit from February 1, 2024 to May 31, 2024. "Guest artist" specializes in tebori tattoos, a traditional Japanese tattoo.',
                    description2: 'For reservations, please contact us using the inquiry form at the bottom of the page and specify that you are requesting "Guest Artist".',
                    link: "Guest Artist's Gallery"
                },
                contactBtn: 'contact me',
                studio: {
                    name: 'Tattoo place Janome',
                    text: "For around six month a year, you can find me at my studio in Kyoto. The studio is just two minutes away from xy station. You will receive the excact address after making an appointment. The other six month I will be visiting other studios around Europe. For further information and schedule, please contact me or visit my social media like "
                },
                art: {
                    header: 'LIFE ART WORKS',
                    paragraph1: 'Nuclear abolition themed silkscreens, ceramics, etc. (shipped from the EU)',
                    paragraph2: 'Tattoo pattern skateboard solo exhibition and online auction scheduled at the same time (Japan)',
                    paragraph3: 'Currently in progress, we are launching a "Japanese apparel brand" designed by Japanese tattoo artists, transforming Japanese tradition into streetwear around the world ㊗︎',
                    artLink: 'Artworks for sale',
                    fashionLink: 'Check out my fashion label'
                },
                contact: {
                    header: 'Contact me',
                    note: {
                        header: 'PLEASE READ BEFORE MAKING AN INQUIRY',
                        text: 'For the rest of my life, I would like to carve pieces that pursue the beauty of tattoos, so I promise that each piece will be custom-made, emphasizing the empathy I have with my customers. Treatments are available for people over 20 years old.'
                    },
                    form: {
                        name: 'Name',
                        namePlaceholder: 'John Doe',
                        mail: 'E-Mail',
                        mailPlaceholder: 'john.doe@yourmail.com',
                        phone: 'Phone',
                        message: 'Message',
                        messagePlaceholder: 'desired pattern, location, desired treatment date, etc.',
                        send: 'send',
                        success: 'Thank you for your request! I will message you back as soon as possible.'
                    }
                }

            }
        },
        jp: {
            translation: {
                navi: {
                    home: 'HOME',
                    about: 'ABOUT',
                    gallery: 'GALLERY',
                    contact: 'CONTACT'
                },
                anouncement: '京都に戻ってきた！',
                headline: '刺青処 蛇乃目',
                aboutText: '幼少から絵画に没頭し、24歳で弟子入りをして早28年経ちます。今尚初心を忘れずに、刺青独自の美を追求し、技術の向上のために世界中を旅してきました。人生の最後の仕事場として、日本で一番好きな街京都を選びました。',
                aboutText2: '以前からご縁のある方、又はこれからご縁のある方、刺青による一期一会を心より楽しみにしております。',
                newsHeader: 'ゲストアーティスト',
                guest: {
                    name: 'Guest Name',
                    description1: '「ゲストアーティスト」は2024年2月1日から2024年5月31日まで訪問可能です。 「ゲストアーティスト」は、日本の伝統的な刺青である手彫りタトゥーを専門としています。',
                    description2: 'ご予約につきましては、ページ下部のお問い合わせフォームより「ゲストアーティスト」と明記の上、ご連絡ください。',
                    link: "ゲストアーティストのギャラリー"
                },
                contactBtn: 'お問い合わせ',
                studio: {
                    name: '刺青処 蛇乃目',
                    text: "年に6ヶ月ほど、私は京都のスタジオにいます。スタジオはXY駅から徒歩2分です。住所は予約後にお知らせします。残りの6ヶ月はヨーロッパ各地のスタジオを訪れます。詳細やスケジュールについては、私に連絡するか、私のソーシャルメディアの「いいね!」をご覧ください："
                },
                art: {
                    header: '芸術作品',
                    paragraph1: '核廃絶テーマのシルクスクリーン、陶器等（EUからの発送になります）',
                    paragraph2: '刺青柄スケボー 個展で同時にネットオークション予定（日本）',
                    paragraph3: '現在進行形では、日本の彫師によるデザインの”和・アパレル・ブランド”立ち上げます◉日本の伝統を世界のストリートウェアに㊗︎',
                    artLink: '買える作品',
                    fashionLink: 'ファッション・レーベルをチェック'
                },
                contact: {
                    header: 'お問い合わせ',
                    note: {
                        header: 'お問い合わせの前にお読みください',
                        text: '余生は特に”刺青美”を追求した作品を彫りたいので、お客様との共感を大切に一つ一つが特注品になる事をお約束します。施術は20歳以上とさせて頂きます。'
                    },
                    form: {
                        name: '名前',
                        namePlaceholder: '山田花子',
                        mail: 'メール',
                        mailPlaceholder: 'yamada.hanako@yourmail.jp',
                        phone: '電話番号',
                        message: 'ことづて',
                        messagePlaceholder: '希望する柄、箇所、施術希望日程等',
                        send: '送る',
                        success: 'リクエストありがとうございます！できるだけ早くお返事を差し上げます。'
                    }
                }
            }
        }



    }
});

export default i18n;