<script setup lang="ts">
import { reactive } from "vue";
import BaseInput from "@/components/BaseInput.vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { UserServices } from "@/services/user.service";
import { useRouter } from "vue-router";

const router = useRouter();

const formData = reactive({
  name: "",
  username: "",
  email: "",
  phone: "",
  website: "",
  company: "",
  city: "",
  street: "",
  suite: "",
  zipcode: "",
});

const rules = {
  name: { required },
  username: { required },
  email: { required },
  phone: { required },
  website: { required },
  company: { required },
  city: { required },
  street: { required },
  suite: { required },
  zipcode: { required },
};

const v$ = useVuelidate(rules, formData);

const submitForm = async () => {
  const result = await v$.value.$validate();
  if (!result) return;
  const newUser = {
    ...formData,
    address: {
      street: formData.street,
      suite: formData.suite,
      city: formData.city,
      zipcode: formData.zipcode,
    },
    company: { name: formData.company },
  };
  await UserServices.creteUser(JSON.stringify(newUser));
  await router.push("/");
};
</script>

<template>
  <h1>Create user</h1>
  <form @submit.prevent="submitForm">
    <div class="create_user-form">
      <div class="create_user-form-item">
        <BaseInput
            v-model:value="formData.name"
            label="Name"
            type="text"
            :error="v$.name.$errors.length !== 0"
        />
      </div>
      <div class="create_user-form-item">
        <BaseInput
            v-model:value="formData.username"
            label="Username"
            type="text"
            :error="v$.username.$errors.length !== 0"
        />
      </div>
      <div class="create_user-form-item">
        <BaseInput
            v-model:value="formData.email"
            label="Email"
            type="email"
            :error="v$.email.$errors.length !== 0"
        />
      </div>
      <div class="create_user-form-item">
        <BaseInput
            v-model:value="formData.phone"
            label="Phone"
            type="tel"
            :error="v$.phone.$errors.length !== 0"
        />
      </div>
      <div class="create_user-form-item">
        <BaseInput
            v-model:value="formData.website"
            label="Website"
            type="text"
            :error="v$.website.$errors.length !== 0"
        />
      </div>
      <div class="create_user-form-item">
        <BaseInput
            v-model:value="formData.company"
            label="Company"
            type="text"
            :error="v$.company.$errors.length !== 0"
        />
      </div>
      <div class="create_user-form-item">
        <BaseInput
            v-model:value="formData.city"
            label="City"
            type="text"
            :error="v$.city.$errors.length !== 0"
        />
      </div>
      <div class="create_user-form-item">
        <BaseInput
            v-model:value="formData.street"
            label="Street"
            type="text"
            :error="v$.street.$errors.length !== 0"
        />
      </div>
      <div class="create_user-form-item">
        <BaseInput
            v-model:value="formData.suite"
            label="Suite"
            type="text"
            :error="v$.suite.$errors.length !== 0"
        />
      </div>
      <div class="create_user-form-item">
        <BaseInput
            v-model:value="formData.zipcode"
            label="Zipcode"
            type="text"
            :error="v$.zipcode.$errors.length !== 0"
        />
      </div>
    </div>
    <button type="submit" class="btn">Create User</button>
  </form>
</template>
