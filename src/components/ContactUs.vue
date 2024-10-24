<template>
 <section class="p-3 sm:px-7 sm:py-7 bg-amber-200">
  <form action="" method="post" autocomplete="on">
   <h1 id="contactus" class="text-3xl font-semibold text-left text-amber-500 pb-6 sm:text-4xl">Contact <span class="text-black">Us</span>
   </h1>
   <p class=" font-semibold pb-4 md:text-xl lg:text-2xl">Please fill out the form below to contact us.</p>
   <div class="flex flex-row flex-wrap mx-2 md:mx-4 md:text-xl">
    <div class="flex flex-col sm:flex-row flex-grow mb-4">
      <div class="wrapper_firstname mr-3 basic-0 flex-grow max-w-full w-full relative">
        <div class="wrapper_label-first">
          <label for="first-name" class="inline-block box-border cursor-default pr-2 pb-2 font-semibold">First Name:</label>
        </div>
        <div class="wrapper_input-first">
          <input type="text" class="border-2 border-black border-solid textbox-name px-1" id="fist-name" placeholder="First Name">
        </div>
      </div>
      <div class="wrapper_lastname basic-0 flex-grow max-w-full w-full relative">
        <div class="wrapper_label-last">
          <label for="last-name" class="inline-block mb-2 box-border cursor-default pr-2 font-semibold">Last Name:</label>
        </div>
        <div class="wrapper_input-last">
          <input type="text" class="border-2 border-black border-solid textbox-name px-1" id="last-name" placeholder="Last Name">
        </div>
      </div>
    </div>
   </div>
   <div class="wrapper-email basic-0 flex-grow max-w-full mx-2 md:mx-4 w-full relative md:text-xl">
        <div class="wrapper_label">
          <label for="emailaddess" class="inline-block mb-2 box-border cursor-default pr-2 font-semibold">E-Mail Address:</label>
        </div>
        <div class="wrapper_input pb-6">
          <input type="email" class="border-2 border-black border-solid textbox-email px-1" id="emailaddess" placeholder="email@emailaddress.com">
        </div>
   </div>
   <div class="wrapper-comments basic-0 flex-col flex-grow max-w-full font-semibold mx-2 md:mx-4 w-full relative md:text-xl">
    <div class="wrapper_label">
      <label for="comments" class="inline-block mb-2 box-border cursor-default pr-2">Comments:</label>
    </div>
    <div class="wrapper_input">
     <textarea rows="5" class="border-2 border-black border-solid textbox-comments px-1" id="comments" placeholder="Comments">
     </textarea>
    </div>
   </div>
  </form>
 </section>
</template>

<style lang="scss">
  .textbox-name{
    width: 44vw;
    @media screen and (max-width: 640px) {
      width: 90vw;
    }
  }
  .textbox-email{
    width: 90vw;
  }
  .textbox-comments{
    width: 90vw;
  }
</style>