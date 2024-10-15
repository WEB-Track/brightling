<template>
 <div class="px-7 pt-5 bg-amber-100">
  <form action="" method="post" autocomplete="on">
   <h1 id="contactus" class="text-2xl font-semibold text-left text-amber-500 pb-9 lg:text-6xl">Contact <span class="text-black">Us</span>
   </h1>
   <div class="flex flex-wrap mx-4 text-xl ">
    <p class=" font-semibold pb-4 text-2xl">Please fill out the form below to contact us.</p>
    <div class="basic-0 flex-grow max-w-full font-semibold px-4 w-full relative">
     <label for="first-name" class="inline-block mb-2 box-border cursor-default pr-2 pb-3">First Name:</label>
     <input type="text" class="border-2 border-black border-solid" id="fist-name" placeholder="First Name">
    </div>
    <div class="basic-0 flex-grow max-w-full px-4 w-full relative">
     <label for="last-name" class="inline-block mb-2 box-border cursor-default font-semibold pr-2">Last Name:</label>
     <input type="text" class="border-2 border-black border-solid" id="last-name" placeholder="Last Name">
    </div>
    <div class="basic-0 flex-grow max-w-full font-semibold px-4 w-full relative">
     <label for="emailaddess" class="inline-block mb-2 box-border cursor-default pr-2 pb-3">E-Mail Address:</label>
     <input type="email" class="border-2 border-black border-solid" id="emailaddess" placeholder="email@emailaddress.com">
    </div>
    <div class="basic-0 flex-col flex-grow max-w-full font-semibold px-4 w-full relative">
     <label for="comments" class="inline-block mb-2 box-border cursor-default pr-2 pb-3">Comments:</label>
     <textarea rows="8" class="border-2 border-black border-solid" id="emailaddess" placeholder="Comments">
      </textarea>
    </div>
   </div>
  </form>
 </div>
</template>