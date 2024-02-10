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
                    contact: 'Contact',
                    FAQ: 'FAQ'
                },
                anouncement: 'I am back in Kyoto!',
                headline: 'SEZUKI TATTOO',
                aboutText: 'I have been immersed in painting since childhood and now 28 years have passed since I became an tattoo apprentice at the age of 24. Still never forgetting my original intention, I have traveled the world to pursue the unique beauty of tattooing and continuing to improve my technique. I have chosen Kyoto, my favorite city in Japan, as my final workplace.',
                aboutText2: 'I am looking forward to the once-in-a-lifetime tattoo experiences with those who have had a relationship with me in the past and those who will have a relationship with me in the future.',
                newsHeader: 'Guest Artists',
                guest: {
                    name: 'Guest Name',
                    description1: '“Guest artists” will visit from February 1, 2024 to May 31, 2024. "Guest artist" specializes in tebori tattoos, a traditional Japanese tattoo.',
                    description2: 'For reservations, please contact us using the inquiry form at the bottom of the page and please specify that you are requesting "Guest Artist".',
                    link: "Guest Artist's Gallery",
                    link2: 'watch Guest Artist on YouTube'
                },
                contactBtn: 'contact me',
                studio: {
                    name: 'Tattoo place Janome',
                    text: "For around six months a year you can find me at my studio in Kyoto. The studio is just two minutes away from xy station. You will receive the exact address after making an appointment. The other six month I will be visiting other studios in Europe. For further information and my schedule, please contact me or visit my social media sites."
                },
                art: {
                    header: 'LIFE ART WORKS',
                    paragraph1: 'Nuclear abolition themed silkscreens, ceramics, etc. (Shipped from the EU)',
                    paragraph2: 'Tattoo pattern skateboard solo exhibition and online auction scheduled at the same time (Japan)',
                    paragraph3: 'Currently in progress, we are launching a "Japanese apparel brand" designed by Japanese tattoo artists where we are transforming Japanese traditions into streetwear around the world ㊗︎',
                    artLink: 'Artworks for sale',
                    fashionLink: 'Check out my fashion label'
                },
                contact: {
                    header: 'Contact me',
                    note: {
                        header: 'PLEASE READ BEFORE MAKING AN INQUIRY',
                        text: 'For the rest of my life, I would like to tattoo pieces that pursue the beauty of tattoos. I promise that each piece will be custom-made, emphasizing the empathy and personal relation that I have with my customers. Services are available for those over 20 years old.'
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
                },
                faq: {
                    headline: 'FAQ',
                    question1: 'What is the pricing system?',
                    answer1: 'The fee is 20,000 yen for the first hour and 15,000 yen for each subsequent hour. If the duration is 4 hours or more, the flat rate will be 15,000 yen per hour.',
                    question2: 'How much is the deposit?',
                    answer2: 'A deposit of 20,000 yen will be requested at the time the design begins. The deposit will be deducted when the work is completed.',
                    question3: 'Are there any areas or patterns that you do not tattoo?',
                    answer3: 'I do not do tattoos on the soles, as the skin on the soles of the feet is hard and thick. I find that it is not suitable for tattoos that can be enjoyed from the skin. Additionally, I do not do treatments on areas with many capillaries, such as earlobes or lips. Please feel free to contact me regarding designs.',
                    question4: 'Do you do Cover-Ups?',
                    answer4: 'Yes and I love it. Please attach a photo of the cover-up tattoo in its current condition when contacting us, then we will help you by suggesting designs for the cover-up.',
                    question5: 'Do you offer Walk-In Appointments?',
                    answer5: 'Unfortunately not, all sessions are via reservation only.'
                },
                data: {
                    headline: 'Privacy Policy',
                    intro: 'This privacy policy describes our arrangements regarding personal information provided through our contact form. This Privacy Policy sets forth our policies regarding the collection, use, disclosure, and protection of personal information on this site.',
                    header1: '1. Collected Information',
                    text1: 'The main information collected through this form is as follows:',
                    text1a: 'Name',
                    text1b: 'Email address',
                    text1c: 'Content of inquiry',
                    text1d: 'Telephone number',
                    header2: '2. Purpose of collection',
                    text2: 'The personal information collected through this form will be used for the following purposes:',
                    text2a: 'Providing answers to inquiries and support',
                    text2b: 'Improving services and ensuring quality',
                    text2c: 'Fulfillment of legal obligations',
                    header3: '3. Information sharing and disclosure',
                    text3: 'We will not share your personal information with third parties unless necessary to respond to legal requests. If there is a legal request, we will notify you before providing the required information.',
                    header4: '4. Storage of personal information',
                    text4: 'Personal information collected will be protected by appropriate measures to prevent unauthorized access, disclosure, alteration, and loss.',
                    header5: '5. Storage period for contact information',
                    text5: 'Information provided through the contact form will be deleted within a reasonable period of time after we have responded to your inquiry.',
                    header6: '6. Your rights',
                    text6: 'With respect to the personal information you provide, you can exercise the following rights:',
                    text6a: 'Right to access your information',
                    text6b: 'Right to correct or delete information',
                    text6c: 'Withdrawing consent to the processing of personal information',
                    header7: '7. Changes to privacy policy',
                    text7: 'We reserve the right to change this privacy policy as necessary. If there are any changes, we will post the changes on this page.',
                    contactHeader: 'Contact details:',
                    contact: '[put contact information and name in here]'

                },
                footer: {
                    privacy: 'Privacy Policy'
                }

            }
        },
        jp: {
            translation: {
                navi: {
                    home: 'HOME',
                    about: 'ABOUT',
                    gallery: 'GALLERY',
                    contact: 'CONTACT',
                    FAQ: 'Q&A'
                },
                anouncement: '京都に戻ってきた！',
                headline: 'SEZUKI TATTOO',
                aboutText: '幼少から絵画に没頭し、24歳で弟子入りをして早28年経ちます。今尚初心を忘れずに、刺青独自の美を追求し、技術の向上のために世界中を旅してきました。人生の最後の仕事場として、日本で一番好きな街京都を選びました。',
                aboutText2: '以前からご縁のある方、又はこれからご縁のある方、刺青による一期一会を心より楽しみにしております。',
                newsHeader: 'ゲストアーティスト',
                guest: {
                    name: 'Guest Name',
                    description1: '「ゲストアーティスト」は2024年2月1日から2024年5月31日まで訪問可能です。 「ゲストアーティスト」は、日本の伝統的な刺青である手彫りタトゥーを専門としています。',
                    description2: 'ご予約につきましては、ページ下部のお問い合わせフォームより「ゲストアーティスト」と明記の上、ご連絡ください。',
                    link: "ゲストアーティストのギャラリー",
                    link2: 'YouTubeで「ゲストアーティスト」を見る'
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
                },
                faq: {
                    headline: 'Q&A',
                    question1: '料金システムが知りたいです',
                    answer1: '時間制で、初めの一時間は二万円、二時間目以降は一時間一万五千円です。四時間以上の場合は均一で時間一万五千円になります。',
                    question2: '内金は必要ですか？',
                    answer2: 'デザイン開始時に内金として20,000円をいただきます。作品完成時に内金は相殺されます。',
                    question3: '彫れない部位や柄はありますか？',
                    answer3: '足裏の皮膚は厚く、皮膚の上から楽しむ刺青には不向きなため、お断りいたします。また、耳たぶ、唇等毛細血管の多い場所もお断りいたします。デザインに関してはお気軽にお問い合わせください。',
                    question4: 'カバーアップタトゥーは可能ですか？',
                    answer4: '大好きです! お問い合わせの際に現状のお写真を添付いただければ、カバーアップ可能な図柄の提案からお手伝いさせて頂きます。',
                    question5: '飛び込みで入れてもらうことは可能ですか？',
                    answer5: '完全予約制ですので、不可能です。'
                },
                data: {
                    headline: 'プライバシーポリシー',
                    intro: 'このプライバシーポリシーは、お問い合わせフォームを通じて提供される個人情報に関する取り決めを説明しています。このプライバシーポリシーは、当サイトにおける個人情報の収集、使用、開示、および保護に関する方針を定めています。',
                    header1: '1. 収集される情報',
                    text1: '当フォームを通じて収集される主な情報は以下の通りです：',
                    text1a: 'お名前',
                    text1b: 'メールアドレス',
                    text1c: 'お問い合わせ内容',
                    text1d: '電話番号',
                    header2: '2. 収集の目的',
                    text2: '当フォームで収集される個人情報は、以下の目的で利用されます：',
                    text2a: 'お問い合わせに対する回答やサポートの提供',
                    text2b: 'サービスの向上と品質の確保',
                    text2c: '法的義務の履行',
                    header3: '3. 情報の共有と開示',
                    text3: '当社は、法的な要求に応じる必要がある場合を除き、お客様の個人情報を第三者と共有しません。法的要求がある場合、必要な情報を提供する前にお客様に通知します。',
                    header4: '4. 個人情報の保管',
                    text4: '収集された個人情報は、不正アクセス、漏洩、改ざん、損失の防止のために適切な手段で保護されます。',
                    header5: '5. お問い合わせ情報の保管期間',
                    text5: 'お問い合わせフォームを通じて提供された情報は、お問い合わせに対する対応が完了した後、適切な期間内で削除されます。',
                    header6: '6. お客様の権利',
                    text6: '提供された個人情報に関しては、お客様は以下の権利を行使できます：',
                    text6a: 'ご自身の情報にアクセスする権利',
                    text6b: '情報の修正や削除の権利',
                    text6c: '個人情報の処理に対する同意の撤回',
                    header7: '7. プライバシーポリシーの変更',
                    text7: '当社は、必要に応じてこのプライバシーポリシーを変更する権利を有します。変更がある場合、変更内容を本ページに掲載します。',
                    contactHeader: 'お問い合わせ先:',
                    contact: '[put contact information and name in here]'

                },
                footer: {
                    privacy: 'プライバシーポリシー'
                }
            }
        }



    }
});

export default i18n;