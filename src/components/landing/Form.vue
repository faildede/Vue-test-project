<template>
    <div class="mt-16">
         <img class="absolute" src="@/assets/bg image.png" alt="">
          <div class="relative text-left pl-60 pt-24">
            <p class="text-white font-light text-2xl leading-8  ml-4 ">Связаться</p> 
            <p class="text-white text-5xl font-bold leading-tight w-2/3">Готовы предложить Вам лучшие IT-решения:</p> 
            <div class=" w-11/12  ray"><!--  It's start all form -->
                 <div class="flex justify-between pb-12 px-5">
                   <div class="con mt-16  p-8 txtcolor h-5/6 "><!-- It's start 1 form  -->
                 <div class="bor container  font-light">
                      
                      <p class="text-lg font-light leading-8 ">Есть идея?</p>
                    <p class="text-xs w-96 font-light leading-5">У вас есть уже существующий проект, который вы хотите усовершенствовать? Вы хотите воплотить в жизнь смелую идею, но вам нужна помощь? Или вы вообще не знаете, с чего начать реализацию проекта? </p>
                      
                 </div>
                  <div class="flex justify-between  mt- bor">
                      <div class="p-2">
                        <p class="font-bold leading-4">Словения</p>
                        <p class="mt-4">{{ mail }}</p>
                        <p class="mt-1">+421 494 539-852</p>
                      </div>
                      <div class="p-2 ml-4">
                        <p class="font-bold leading-4">Россия</p>
                        <p class="mt-4">{{ mail }}</p>
                        <p class="mt-1">+7 911 932-90-29</p>
                      </div>
                  </div>
                  <div class="flex mt-4 px-2">
                    <i class="fa-brands fa-linkedin p-3 text-3xl"></i>
                    <i class="fa-brands fa-google p-3 text-3xl"></i>
                    <i class="fa-brands fa-facebook p-3 text-3xl"></i>
                    <i class="fa-brands fa-dribbble p-3 text-3xl"></i>
                    <i class="fa-brands fa-instagram p-3 text-3xl"></i>
                  </div>
                </div>
                 <div class="mt-28 ml-28 mr-26"><!-- It's form -->
                   <div class="" ><!-- It's bottom 2nd form -->
                    <p class="font-bold text-3xl leading-10 textee">Связаться с нами</p>
                    <p class="font-light w-full ">Оставьте свою контактную информацию, и мы<br/> с радостью свяжемся с вами!</p>
                  </div>
                   <div class="flex flex-wrap mt-3"><!--It's start form-->
                    <input class="p-3 rounded-md my-2 w-96" type="text" placeholder="Имя * ">
                    <input class="p-3 rounded-md my-2 w-96" type="text" placeholder="Компания">
                    <input class="p-3 rounded-md my-2 w-96" type="text" placeholder="Электронная почта *">
                       <form>
                         <textarea class="p-3 rounded-md my-2 w-96" cols="10" rows="4" placeholder="Сообщения"></textarea>
                       </form>
                       <div class="flex w-52">
                        <div>
                          <p> <span class="color-red">*</span> обязательные поля для заполнения</p>
                          <button class="knopp py-2 w-60">Отправить</button>
                        </div>
                        <div class=" text-sm font-light">
                          <p class="m-5">Нажимая на кнопку, вы соглашаетесь c<span class="rrr cursor-pointer"> Политикой конфидециальности </span></p>
                        </div>
                       </div>
                  </div>               
                </div>
                  </div>
            </div>         
          </div>
        </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"Form",
    data(){
      return {
        mail:"contact@unionsmarttech.ru",
        regist:{
          name:null,
          company:null,
          email: null,
          message:null
        }
      };
    },
    methods:{
      async sendmess(){
        await axios.post('')
      }
    }
}
</script>