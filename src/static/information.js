export default {
  about: [
    {
      head: "Name",
      body: "高田 颯 / Takada Soh"
    },
    {
      head: "University",
      body: "横浜国立大学 経営学部"
    },
    {
      head: "Birthday",
      body: "1999/03/23"
    },
    {
      head: "Hobby",
      body: "ギター・アニメ・競プロ・麻雀"
    }
  ],
  skill: {
    "言語 / Language": [
      {
        name: "JavaScript (ES6+)",
        icon: "devicon-javascript-plain",
        level: 4
      },
      {
        name: "TypeScript",
        icon: "devicon-typescript-plain",
        level: 4
      },
      {
        name: "Python3",
        icon: "devicon-python-plain",
        level: 4
      },
      {
        name: "Ruby",
        icon: "devicon-ruby-plain",
        level: 3
      },
      {
        name: "HTML5",
        icon: "devicon-html5-plain",
        level: 4
      },
      {
        name: "CSS3",
        icon: "devicon-css3-plain",
        level: 4
      },
      {
        name: "Go",
        icon: "devicon-go-plain",
        level: 2
      },
      {
        name: "VBA",
        icon: "fas fa-file-excel",
        level: 3
      },
      {
        name: "GAS",
        icon: "devicon-google-plain",
        level: 3
      },
      {
        name: "Japanese",
        level: 4
      },
      {
        name: "English",
        level: 3
      }
    ],
    "フレームワーク / Framework": [
      {
        name: "Node.js",
        icon: "devicon-nodejs-plain",
        level: 4
      },
      {
        name: "React",
        icon: "devicon-react-plain",
        level: 4
      },
      {
        name: "Vue.js",
        icon: "devicon-vuejs-plain",
        level: 4
      },
      {
        name: "Nuxt.js",
        level: 4
      },
      {
        name: "Bulma",
        level: 3
      },
      {
        name: "jQuery",
        icon: "devicon-jquery-plain",
        level: 3
      },
      {
        name: "Ruby on Rails 5,6",
        icon: "devicon-rails-plain",
        level: 3
      }
    ],
    "インフラ / Infrastructure": [
      {
        name: "AWS (EC2, RDS, S3, CloudWatch, CodeDeploy, ...)",
        icon: "devicon-amazonwebservices-original",
        level: 3
      },
      {
        name: "GCP (BigQuery)",
        icon: "devicon-google-plain",
        level: 3
      },
      {
        name: "FireBase",
        icon: "devicon-google-plain",
        level: 3
      },
      {
        name: "Router (FutureNet)",
        icon: "fas fa-wifi",
        level: 2
      },
      {
        name: "MySQL",
        icon: "devicon-mysql-plain",
        level: 3
      },
      {
        name: "PostgreSQL",
        icon: "devicon-postgresql-plain",
        level: 3
      },
      {
        name: "Wireshark",
        level: 3
      }
    ],
    "開発環境 / Environment": [
      {
        name: "Windows",
        icon: "devicon-windows8-original",
        level: 4
      },
      {
        name: "Linux(Ubuntu, CentOS)",
        icon: "devicon-linux-plain",
        level: 3
      },
      {
        name: "Visual Studio Code",
        level: 4
      },
      {
        name: "Git",
        icon: "devicon-git-plain",
        level: 3
      }
    ]
  },
  experience: [
    {
      name: "Literary Forest",
      img: require("./LiteraryForest.png"),
      comment:
        "他のユーザーと、ツリー形式でリレー型のアンソロジーをつくるwebサービスです。趣味で長期休暇を使い2週間程度で制作しました。\nリレー型アンソロジーということを意識させるための表現を工夫し、短文小説の書かれたカードを線でつなぐという方法を取りました。",
      link: "https://literary-forest.herokuapp.com/",
      tag: [
        "Ruby on Rails 5",
        "HTML5",
        "CSS3",
        "JavaScript",
        "jQuery",
        "git",
        "Heroku",
        "Atom"
      ]
    },
    {
      name: "基幹業務システム等",
      comment:
        "基幹業務システムの提案・要件定義・設計・開発等を行いました。\nその他社内業務に使用するITシステムの選定、導入・運用作業、お客様に提供するサービスに使用するソフトウェアの選定、プログラムの開発、ネットワークの設計・構築作業などを行いました。",
      tag: ["Vue.js", "Cybozu Kintone", "PostgreSQL", "PostGIS", "Powershell"]
    },
    {
      name: "人材管理SaaS",
      comment:
        "将来的な拡張性を考えて使用する技術の選定・設計を行い、それを元に開発・テストなどを行いました。",
      tag: ["AWS EC2", "AWS S3", "Node.js", "Express", "Nuxt.js"]
    },
    {
      name: "freeeサマーインターン (2Weeks)",
      comment:
        "新しい勤怠管理プロダクトの企画から実装までを3人のチームで2週間取り組み、挨拶の声をトリガーとして、発声した人の顔を認識し自動で勤怠の打刻をするプロダクトを開発しました。\n音声・顔認識システムから人事労務freee APIにアクセスするためのSDK開発、DB設計、データ管理システムの開発を担当しました。",
      tag: ["Python3", "Node.js", "Express", "Vue.js", "Firebase"]
    },
    {
      name: "チームラボサマーインターン (2Weeks)",
      comment:
        "既存システムインフラの監視項目を充実させるため、Amazon CloudWatch Container Insights、AWS X-rayを使用して監視項目を追加しました。",
      tag: [
        "Terraform",
        "Go",
        "Amazon CloudWatch",
        "Amazon ECS",
        "Amazon ECR",
        "AWS Fargate",
        "AWS X-ray",
        "Amazon VPC",
        "ELB",
        "Amazon SNS"
      ]
    },
    {
      name: "ポートフォリオ",
      comment: "このサイトです。\nVue.js+Bulmaで開発しています。",
      link: "https://github.com/FeLvi-zzz/portfolio",
      tag: ["Vue.js", "Bulma"]
    },
    {
      name: "その他",
      comment: [
        "Paiza Sランク",
        "横浜国立大学 学業優秀者表彰 平成30年度春学期、秋学期、令和元年度春学期",
        "令和元年度 データ解析コンペティション OR部会 学生奨励賞",
        "TOEFL ITP 507",
        "AtCoder 水"
      ].join("\n")
    }
  ],
  contact: [
    {
      name: "Google Form",
      url: "https://forms.gle/281RFvxPdDzE2tKn7",
      icon: "fas fa-envelope"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/FeLvi_zzz",
      icon: "fab fa-twitter"
    },
    {
      name: "Github",
      url: "https://github.com/felvi-zzz",
      icon: "fab fa-github"
    }
  ]
};
