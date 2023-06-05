import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h2>プライバシーポリシー</h2>
        <p>
          「今食べたい！世界の料理診断」アプリは、無料アプリとして構築しました。本サービスは、Mickey.Iが無償で提供するものであり、そのままご利用いただくことが可能です。
          このページは、私のサービスを利用することを決定した場合に、個人情報の収集、使用、および開示に関する私の方針について訪問者に通知するために使用されます。
          <br />
          あなたが私のサービスを使用することを選択した場合、あなたはこのポリシーに関連する情報の収集と使用に同意するものとします。私が収集した個人情報は、本サービスの提供および改善のために使用されます。私は、このプライバシーポリシーに記載されている場合を除き、あなたの情報を使用したり、誰かと共有することはありません。
          このプライバシーポリシーで使用される用語は、このプライバシーポリシーで特に定義されない限り、世界料理診断でアクセスできる当社の利用規約と同じ意味を持っています。
        </p>
        <h2>情報の収集と使用</h2>
        <p>
          より良い経験のために、私たちのサービスを使用している間、私は、特定の個人を特定できる情報を提供することを要求することがあります。
          質問に答えて、私たちは、推奨される世界の料理を診断します。私が要求する情報は、お客様のデバイスに保持され、私が何らかの方法で収集するものではありません。
          本アプリは、お客様を識別するために使用される情報を収集する可能性のある第三者サービスを使用しています。
          <br />
        </p>
        <p>
          アプリが利用する第三者サービス提供者のプライバシーポリシーへのリンク
        </p>
        <ul>
          <li>
            <Link href="https://policies.google.com/privacy">
              Google Play Services
            </Link>
          </li>
          <li>
            <Link href="https://expo.dev/privacy">Expo</Link>
          </li>
        </ul>
        <h2>ログデータについて</h2>
        <p>
          私は、お客様が私のサービスを利用するたびに、アプリにエラーが発生した場合、私はログデータと呼ばれるお客様の携帯電話上のデータおよび情報（サードパーティ製品を通じて）を収集することをお知らせしたいと思います。このログデータには、お客様の端末のインターネットプロトコル（以下「IP」）アドレス、端末名、オペレーティングシステムのバージョン、私のサービスを利用する際のアプリの設定、お客様がサービスを利用した日時、その他の統計などの情報が含まれることがあります。
        </p>
        <h2>クッキー（Cookies)</h2>
        <p>
          Cookieとは、一般的に匿名のユニークな識別子として使用される、少量のデータを含むファイルです。これらは、お客様が訪問したウェブサイトからお客様のブラウザに送信され、お客様のデバイスの内部メモリに保存されます。
          本サービスでは、この「Cookie」を明示的に使用することはありません。ただし、本アプリでは、情報の収集やサービスの向上のために「Cookie」を使用するサードパーティのコードやライブラリを使用することがあります。お客様は、これらのクッキーを受け入れるか拒否するかを選択することができ、クッキーがお客様のデバイスに送信されていることを知ることができます。お客様が当社のクッキーを拒否することを選択された場合、本サービスの一部をご利用いただけない場合があります。
        </p>
        <h2>サービスプロバイダー</h2>
        <p>
          私は、以下の理由により、第三者の企業や個人を雇用することがあります：
          当社のサービスを容易にするため；
          当社に代わって本サービスを提供するため；
          本サービスに関連するサービスを提供するため。
          本サービスがどのように利用されているかを分析するために当社を支援するため。
          本サービスの利用者に、これらの第三者が利用者の個人情報にアクセスできることをお知らせしたいと思います。その理由は、私たちに代わって彼らに割り当てられたタスクを実行するためです。ただし、これらの第三者は、他の目的のために情報を開示または使用しない義務を負っています。
        </p>
        <h2>セキュリティについて</h2>
        <p>
          私は、お客様の個人情報を提供することへの信頼を大切にし、したがって、当社は、商業的に許容される手段を用いて、個人情報を保護するよう努力しています。しかし、インターネットを介した送信方法や電子的な保存方法は、100％安全で信頼できるものではなく、その絶対的な安全性を保証することはできませんので、ご注意ください。
        </p>
        <h2>他のサイトへのリンク</h2>
        <p>
          本サービスには、他のサイトへのリンクが含まれている場合があります。お客様が第三者のリンクをクリックすると、そのサイトへ移動します。これらの外部サイトは、私が運営しているものではないことにご注意ください。従って、これらのウェブサイトのプライバシーポリシーを確認することを強くお勧めします。私は、第三者のサイトやサービスのコンテンツ、プライバシーポリシー、または慣行を管理することはなく、一切の責任を負いません。
        </p>
        <h2>子供のプライバシー</h2>
        <p>
          本サービスは、13歳未満の方を対象としていません。私は、13歳未満のお子様から個人を特定できる情報を意図的に収集することはありません。万が一、13歳未満の子供から個人情報を提供されたことが判明した場合、私は直ちにこれを当社のサーバーから削除します。保護者の方で、お子さまが当社に個人情報を提供していることに気づかれた場合は、必要な措置を講じることができますので、ご連絡ください。
        </p>
        <h2>本プライバシーポリシーの変更</h2>
        <p>
          私は、プライバシーポリシーを随時更新することがあります。従って、お客様はこのページを定期的にご覧になり、変更を確認されることをお勧めします。私は、このページに新しいプライバシーポリシーを掲載することにより、変更を通知します。
          このポリシーは、2023-06-05から有効となります。 お問い合わせ
          私のプライバシーポリシーについてご質問やご提案がある場合は、遠慮なく
          mickey.dev0443@gmail.com までご連絡ください。
        </p>
      </main>
    </>
  );
}
