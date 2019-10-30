<template>
  <div id="app">
    <nav class="navbar is-primary is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <span role="button" class="navbar-burger" @click="isExpandedNav ^= 1">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </span>
      </div>
      <div class="navbar-start"></div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons f-nav-item">
              <a href="#about" class="navbar-item">
                <span class="icon">
                  <i class="fas fa-info-circle"></i>
                </span>
                about
              </a>
              <a href="#skill" class="navbar-item">
                <span class="icon">
                  <i class="fas fa-desktop"></i>
                </span>
                skill
              </a>
              <a href="#experience" class="navbar-item">
                <span class="icon">
                  <i class="fas fa-briefcase"></i>
                </span>
                experience
              </a>
              <a href="#contact" class="navbar-item">
                <span class="icon">
                  <i class="fas fa-paper-plane"></i>
                </span>
                contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <header id="header" class="hero is-medium is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Takada Soh's Portfolio</h1>
        </div>
      </div>
    </header>

    <section id="about" class="section">
      <div class="container has-text-centered">
        <h2 class="title">
          <i class="fas fa-info-circle"></i>
          About
        </h2>
        <div class="columns">
          <div class="column is-4-desktop is-full-mobile" id="profile">
            <figure class="image is-128x128">
              <img class="is-rounded" src="./static/felvi.png" alt="felvi's icon" />
            </figure>
          </div>
          <div class="column is-8-desktop is-full-mobile">
            <table class="table is-fullwidth">
              <tbody>
                <tr v-for="item in about" :key="item.head">
                  <th align="center">{{ item.head }}</th>
                  <td align="center">{{ item.body }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <section id="skill" class="section">
      <div class="container has-text-centered">
        <h2 class="title">
          <i class="fas fa-desktop"></i>
          Skill
        </h2>
        <div class="columns is-multiline">
          <div
            class="column is-half is-full-mobile"
            v-for="(items, skillKey) in skill"
            :key="skillKey"
          >
            <h3 class="title is-4">{{ skillKey }}</h3>
            <table class="table is-fullwidth">
              <tbody>
                <tr v-for="item in items" :key="item.name">
                  <th>
                    <span class="icon" v-show="item.icon">
                      <i :class="item.icon"></i>
                    </span>
                    {{ item.name }}
                  </th>
                  <td align="right">
                    <span class="icon" v-for="i in item.level" :key="skillKey + i">
                      <i class="fas fa-star"></i>
                    </span>
                    <span
                      class="icon"
                      v-for="i in 5 - item.level"
                      :key="skillKey + (item.level + i)"
                    >
                      <i class="far fa-star"></i>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <section id="experience" class="section">
      <div class="container has-text-centered">
        <h2 class="title">
          <i class="fas fa-briefcase"></i>
          Experience
        </h2>
        <div class="columns is-multiline">
          <div class="column is-half is-full-tablet" v-for="item in experience" :key="item.name">
            <div class="card">
              <div class="card-content has-text-left">
                <p class="title is-5">
                  {{ item.name }}
                  <a :href="item.link" target="_blank" v-if="item.link">
                    <span class="icon is-small">
                      <i class="fas fa-external-link-alt"></i>
                    </span>
                  </a>
                </p>
              </div>
              <div class="tags" v-show="item.tag">
                <span class="tag" v-for="tag in item.tag" :key="tag">{{ tag }}</span>
              </div>
              <div class="card-image" v-show="item.img">
                <figure class="image">
                  <img :src="item.img" />
                </figure>
              </div>
              <div class="card-content has-text-left" :class="{ 'comment-only': !item.img }">
                <p class="comment">{{ item.comment }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="section">
      <div class="container has-text-centered">
        <h2 class="title">
          <i class="fas fa-paper-plane"></i>
          Contact
        </h2>
        <a
          class="contact-link"
          target="_blank"
          v-for="item in contact"
          :key="item.name"
          :href="item.url"
        >
          <i :class="item.icon"></i>
        </a>
      </div>
    </section>

    <footer class="has-text-centered">©2019- Takada Soh.</footer>
    <transition name="menu">
      <div id="fullnav" v-show="isExpandedNav">
        <span @click="isExpandedNav ^= 1">
          <i class="fas fa-times"></i>
        </span>
        <ul>
          <li @click="isExpandedNav ^= 1">
            <a href="#about">
              <i class="fas fa-info-circle"></i>
              About
            </a>
          </li>
          <li @click="isExpandedNav ^= 1">
            <a href="#skill">
              <i class="fas fa-desktop"></i>
              Skill
            </a>
          </li>
          <li @click="isExpandedNav ^= 1">
            <a href="#experience">
              <i class="fas fa-briefcase"></i>
              Experience
            </a>
          </li>
          <li @click="isExpandedNav ^= 1">
            <a href="#contact">
              <i class="fas fa-paper-plane"></i>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app",
  created() {
    const pfData = {
      "about": [
        {
          "head": "Name",
          "body": "高田 颯 / Takada Soh"
        },
        {
          "head": "University",
          "body": "横浜国立大学 経営学部"
        },
        {
          "head": "Birthday",
          "body": "1999/03/23"
        },
        {
          "head": "Hobby",
          "body": "ギター・アニメ・競プロ"
        }
      ],
      "skill": {
        "言語 / Language": [
          {
            "name": "JavaScript (ES6+)",
            "icon": "devicon-javascript-plain",
            "level": 4
          },
          {
            "name": "Python3",
            "icon": "devicon-python-plain",
            "level": 3
          },
          {
            "name": "HTML5",
            "icon": "devicon-html5-plain",
            "level": 4
          },
          {
            "name": "CSS3",
            "icon": "devicon-css3-plain",
            "level": 4
          },
          {
            "name": "VBA",
            "icon": "fas fa-file-excel",
            "level": 3
          },
          {
            "name": "GAS",
            "icon": "devicon-google-plain",
            "level": 3
          },
          {
            "name": "Ruby",
            "icon": "devicon-ruby-plain",
            "level": 3
          },
          {
            "name": "Japanese",
            "level": 4
          },
          {
            "name": "English",
            "level": 3
          }
        ],
        "フレームワーク / Framework": [
          {
            "name": "Node.js",
            "icon": "devicon-nodejs-plain",
            "level": 4
          },
          {
            "name": "Vue.js",
            "icon": "devicon-vuejs-plain",
            "level": 4
          },
          {
            "name": "Nuxt.js",
            "level": 4
          },
          {
            "name": "Bulma",
            "level": 3
          },
          {
            "name": "jQuery",
            "icon": "devicon-jquery-plain",
            "level": 3
          },
          {
            "name": "Ruby on Rails 5",
            "icon": "devicon-rails-plain",
            "level": 3
          }
        ],
        "インフラ / Infrastructure": [
          {
            "name": "AWS",
            "icon": "devicon-amazonwebservices-original",
            "level": 3
          },
          {
            "name": "GCP (BigQuery)",
            "icon": "devicon-google-plain",
            "level": 2
          },
          {
            "name": "FireBase",
            "icon": "devicon-google-plain",
            "level": 3
          },
          {
            "name": "Router (FutureNet)",
            "icon": "fas fa-wifi",
            "level": 2
          },
          {
            "name": "MySQL",
            "icon": "devicon-mysql-plain",
            "level": 3
          },
          {
            "name": "PostgreSQL",
            "icon": "devicon-postgresql-plain",
            "level": 3
          },
          {
            "name": "Wireshark",
            "level": 3
          }
        ],
        "開発環境 / Environment": [
          {
            "name": "Windows",
            "icon": "devicon-windows8-original",
            "level": 4
          },
          {
            "name": "Linux(Ubuntu, CentOS)",
            "icon": "devicon-linux-plain",
            "level": 3
          },
          {
            "name": "Visual Studio Code",
            "level": 4
          },
          {
            "name": "Git",
            "icon": "devicon-git-plain",
            "level": 3
          }
        ]
      },
      "experience": [
        {
          "name": "Literary Forest",
          "img": require("./static/literaryforest.png"),
          "comment": "他のユーザーと、ツリー形式でリレー型のアンソロジーをつくるwebサービスです。趣味で長期休暇を使い2週間程度で制作しました。\nリレー型アンソロジーということを意識させるための表現を工夫し、短文小説の書かれたカードを線でつなぐという方法を取りました。",
          "link": "https://literary-forest.herokuapp.com/",
          "tag": [
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
          "name": "基幹業務システム",
          "comment": "基幹業務システムの提案・要件定義・設計・開発等を行いました。\nその他社内業務に使用するITシステムの選定、導入・運用作業、お客様に提供するサービスに使用するソフトウェアの選定、プログラムの開発、ネットワークの設計・構築作業などを行いました。",
          "tag": [
            "Vue.js",
            "Cybozu Kintone",
            "PostgreSQL",
            "PostGIS",
            "Powershell"
          ]
        },
        {
          "name": "人材管理SaaS開発",
          "comment": "将来的な拡張性を考えて使用する技術の選定・設計を行い、それを元に開発・テストなどを行いました。",
          "tag": [
            "AWS EC2",
            "AWS S3",
            "Node.js",
            "Express",
            "Nuxt.js"
          ]
        },
        {
          "name": "その他",
          "comment": "Paiza Sランク\n横浜国立大学 学業優秀者表彰 平成30年度春学期、秋学期"
        }
      ],
      "contact": [
        {
          "name": "Google Form",
          "url": "https://forms.gle/281RFvxPdDzE2tKn7",
          "icon": "fas fa-envelope"
        },
        {
          "name": "Twitter",
          "url": "https://twitter.com/FeLvi_zzz",
          "icon": "fab fa-twitter"
        },
        {
          "name": "Github",
          "url": "https://github.com/felvi-zzz",
          "icon": "fab fa-github"
        }
      ]
    }

    for(let name in pfData) {
      this[name] = pfData[name]
    }
  },
  data() {
    return {
      isExpandedNav: false
    };
  }
};
</script>

<style lang="scss">
$primary: #a5d6a7;
$secondary: #965444;
@import "bulma/bulma.sass";

.navbar a.navbar-item {
  color: $white;
  &:hover {
    color: $primary;
  }
  & > span.icon {
    margin-right: 0;
  }
}

h2 {
  margin-top: 2rem;
}

.section {
  padding-bottom: 0;
}

#profile {
  display: flex;
  align-items: center;
  justify-content: center;
}

#skill .table td {
  white-space: nowrap;
}

#experience .card {
  height: 100%;
  .icon {
    color: $grey-light;
    margin-left: 0.5em;
  }
  .icon:hover {
    color: $black;
  }
  .tags {
    padding: 0 1rem;
  }
  .comment {
    white-space: pre-line;
  }
  .comment-only {
    padding-top: 0;
  }
}

#contact .contact-link {
  display: inline-block;
  height: 5rem;
  width: 5rem;
  padding: 1rem;
  margin: 0.5rem 1rem 0;
  border-radius: 50%;
  background: $primary;
  font-size: 2rem;
  color: #fff;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: $secondary;
  }
}

footer {
  background-color: $primary;
  padding: 0.5rem;
  margin-top: 2rem;
}

.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.3s ease;
}

.menu-enter,
.menu-leave-to {
  opacity: 0;
}

#fullnav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  height: 100%;
  width: 100%;
  background-color: rgba($primary, 0.7);
  backdrop-filter: blur(1rem);

  & > span {
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    height: 3.25rem;
    width: 3.25rem;
    font-size: 1.5rem;
    line-height: 3.25rem;
    text-align: center;
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }

  ul {
    position: absolute;
    width: 100%;
    height: 60%;
    top: 20%;
    display: flex;
    flex-flow: column;
    justify-content: space-around;

    li {
      text-align: center;
      font-size: 2.5rem;
      cursor: pointer;
      user-select: none;
      a {
        color: unset;
      }
      &:hover {
        color: $white;
      }
    }
  }
}
</style>
