<template>
  <section>
    <div class="landing-header">
      <div class="landing-header__content-container">
        <div class="landing-header__title">
          <div class="landing-header__title--content">
            {{ siteName }}
          </div>
        </div>
        <div class="landing-header__tagline">
          <div class="landing-header__tagline-content">
            <strong>{{ siteDescription }}</strong>
          </div>
        </div>
      </div>
    </div>
    <scroll-icon class="landing-header__scroll-icon text-center" />
  </section>
</template>

<script>
import ScrollIcon from '../../atoms/ScrollIcon/ScrollIcon'

export default {
  name: 'LandingHeader',
  components: {
    ScrollIcon
  },
  props: {
    siteName: {
      type: String,
      default: 'MJPT'
    },
    siteDescription: {
      type: String,
      default: 'MJPT'
    }
  }
}
</script>

<style lang="scss">

.landing-header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 94vh;
    border-radius: 0.5rem 0.5rem 0 0;
    background-position: center;
    background-size: cover;
    background-image: url(https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80);
    font-size: small;
    font-weight: 100;
    margin-bottom: 1rem;

    &__content-container {
        color: white;
        border-radius: 0.5rem;
        height: 50vh;
        padding: 3.5vh;
        letter-spacing: 6px;
        text-align: center;
        max-width: 24rem;
    }

    &__title {
        font-weight: 100;
    }

    &__tagline {
        text-transform: uppercase;
    }

    &-icon {
        &::before {
            content: '';
            display: inline-flex;
            align-items: center;
            border-radius: 12px;
        }
    }

    &__statistic {
        position: absolute;
        display: flex;
        align-items: center;
        left: 2.25rem;
        padding: .75em;
        bottom: 7.5rem;
        transform: rotate(-90deg);
        transform-origin: 0 50%;
        white-space: nowrap;
        animation: 4s fadeInOut ease-in infinite;

        &-classes {
            left: calc(100% - 2.25rem);

            &--padwork {
                display: flex;
                align-items: center;
            }

            &--circuits {
                display: flex;
                align-items: center;
                padding-left: 2rem;
            }

        }
    }

    &__scroll-icon {
      margin: auto;
      position: relative;
      bottom: 5rem;
    }
}

</style>
