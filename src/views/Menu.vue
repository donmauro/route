    <template>
        <div class="ui three item menu">
           <router-link class="item" :to="{ path: '/helloworld' }">Hello, World</router-link>
            <router-link class="item" :to="{ path: '/a' }">A</router-link>
            <router-link  class="item" :to="{ path: '/b' }">B</router-link>
        </div>
    </template>