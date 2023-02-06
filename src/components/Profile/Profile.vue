<script setup lang="ts">
import type {IUser} from "@/components/Users/User.interface";
import type {ComputedRef} from "vue";
import {computed, onMounted} from "vue";
import ProfileInfoItem from "@/components/Profile/ProfileInfoItem.vue";
import {useRouter} from "vue-router";
import {store} from "@/store";
import Loading from "@/components/Loading.vue";

const router = useRouter();
const currentPathObject = router.currentRoute.value;

onMounted(() => {
  store.dispatch("users/getCurrentUser", currentPathObject.params.id);
});

const loading = computed(() => store.state.users.loading);
const user: ComputedRef<IUser | null> = computed(
    () => store.state.users.current
);

// const { name, username, email, phone, website, company, address } = user;
// const userInfo = Object.entries({
//   email,
//   phone,
//   website,
//   company: company.name,
//   address: `${address.suite} ${address.street}, ${address.city}, ${address.zipcode}`,
// });
</script>

<template>
  <Loading v-if="loading"/>
  <div class="profile" v-else>
    <div v-if="user !== null">
      <h1>
        {{
          user.name
        }}<span class="profile_username">@{{ user.username }}</span>
      </h1>
      <ul class="profile_info">
        <li class="profile_info_item">
          <ProfileInfoItem title="email" :desc="user.email"/>
        </li>
        <li class="profile_info_item">
          <ProfileInfoItem title="phone" :desc="user.phone"/>
        </li>
        <li class="profile_info_item">
          <ProfileInfoItem title="website" :desc="user.website"/>
        </li>
        <li class="profile_info_item">
          <ProfileInfoItem title="company" :desc="user.company.name"/>
        </li>
        <li class="profile_info_item">
          <ProfileInfoItem
              title="address"
              :desc="
              user.address.suite +
              ' ' +
              user.address.street +
              ' ' +
              user.address.city +
              ' ' +
              user.address.zipcode
            "
          />
        </li>
      </ul>
    </div>
  </div>
</template>
