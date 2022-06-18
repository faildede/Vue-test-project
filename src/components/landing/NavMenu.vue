<template>
    <div class="bg-black ">
        <div class="vse">
            <div class="container flex mx-auto py-2 justify-between  ">
                <div class="flex p-2">
                    <img class="p" src="@/assets/ustlogo.png" alt="">
                  <div class="my-auto text-white">
                        <p class="uppercase font-semibold text-base ">Union Smart Technology </p>
                        <p class="text-sm text-gray font-normal">Simple solutions for complex problems</p>
                  </div>
                </div>
                <div class=" my-auto flex ">
                    <div class=" font-light search"> <a class="mx-3" href="#">Главная</a> </div>
                    <div class=" font-light search"><a class="mx-3  " href="#">Команда</a></div>
                   <div class=" font-light search"> <a class="mx-3  " href="#">Услуги</a></div>
                    <div class="font-light search"><a class="mx-3  " href="#">Карьера</a> </div>
                   <div class=" font-light search"> <a class="mx-3  " href="#">Портфолио</a></div>
                   <div class=" font-light search"> <a class="mx-3  " href="#">Контакты</a></div>
                   <div class="mx-3 flex">
                        <img class="px-2" src="@/assets/flags/US.png" alt="">
                        <div class="searc  "> <i class="px-2 text-lg fas fa-search"></i></div>
                   </div>
                    
                </div>
            </div>
            
               <div class="space container mt-36 mx-auto"> 
            <div>
                <p class="text-white font-light text-4xl uppercase ">Студия разработки программного обеспечения <br/><span class="text-blueee">  с продуктовым мышлением </span></p>
                <p class="text-white font-light w-80  my-4" >Мы создаем кроссплатформенные мобильные приложения и веб-платформы и находим для них лучшие решения.</p>
            </div>
            <div class=" my-6 w-1/6 ">
               <button class="text-white snap w-full px-5 py-3.5 font-light">Заказать проект</button>
            </div>
        </div>
        <div class=" container mx-auto flex justify-center pt-40 pb-40">
            <div class="text-white  px-32">
                <p class="font-bold text-6xl text-center">4+</p>
                <p class=" font-light">Года опыта</p>
            </div>
            <div class="text-white  px-32">
                <p class="font-bold text-6xl text-center">30+</p>
                <p class=" font-light">Завершенных проектов</p>
            </div>
            <div class="text-white  px-32">
                <p class="font-bold text-6xl text-center">4+</p>
                <p class=" font-light">Года опыта</p>
            </div>
            <div class="text-white  px-32">
                <p class="font-bold text-6xl text-center">4+</p>
                <p class=" font-light">Года опыта</p>
            </div>
            
        </div>
        </div>
     <NavBody/>
    </div>
</template>

<script>
import NavBody from "@/components/landing/NavBody.vue"
export default {
    components:{
        NavBody
    }
    
}
</script>