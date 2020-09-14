<template>
  <div id="app">
    <nav
      class="navbar is-primary is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
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
          <div class="column is-half is-full-mobile" id="profile">
            <figure class="image is-128x128">
              <img
                class="is-rounded"
                src="./static/felvi.png"
                alt="felvi's icon"
              />
            </figure>
          </div>
          <div class="column is-half is-full-mobile">
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
                    <span
                      class="icon"
                      v-for="i in item.level"
                      :key="skillKey + i"
                    >
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
          <div
            class="column is-half is-full-tablet"
            v-for="item in experience"
            :key="item.name"
          >
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
                <span class="tag" v-for="tag in item.tag" :key="tag">
                  {{ tag }}
                </span>
              </div>
              <div class="card-image" v-show="item.img">
                <figure class="image">
                  <img :src="item.img" />
                </figure>
              </div>
              <div
                class="card-content has-text-left"
                :class="{ 'comment-only': !item.img }"
              >
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
import information from "./static/information";

export default {
  name: "app",
  created() {
    const pfData = information;
    for (let name in pfData) {
      this[name] = pfData[name];
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

.table th,
.table td {
  vertical-align: middle;
  word-break: keep-all;
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
