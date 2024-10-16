<script setup>
import ContactUs from '@/components/ContactUs.vue';
import EmailAddress from '@/components/EmailAddress.vue';
import PhoneNumber from '@/components/PhoneNumber.vue';
import TheLocation from '@/components/TheLocation.vue';
import ThreeColumn from '@/components/ThreeColumn.vue';
</script>

<template>
 <div class="contact">
  <ContactUs/>
  <ThreeColumn>
      <template v-slot:threeColLeft>
        <TheLocation/>
      </template>
      <template v-slot:threeColMiddle>
        <PhoneNumber/>
      </template>
      <template v-slot:threeColRight>
        <EmailAddress/>
      </template>
    </ThreeColumn>
 </div>
</template>