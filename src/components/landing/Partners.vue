<template>
    <div>
      <div class="container mx-auto ">
        <div class=" mt-44 ">
        <p class="textee  text-2xl font-normal mt-2 flex justify-start">Наши</p>
        <p class="textee font-bold text-6xl flex justify-start">Преимущества</p>
         <p class="font-xs text-left ">
         Основная ценность нашей компании - создание качественного продукта и <br/> удовлетворение потребностей клиента. Поэтому перед началом разработки мы<br/> проводим маркетинговые исследования и помогаем клиенту определить стратегию<br/> развития продукта.
        </p>
        </div>
        <div class="flex justify-center mt-10">
       <div  class="container mx-3" v-for="ImageInfo of Pinfo" :key="ImageInfo.id">  
     <div>
            <img class="r" src="@/assets/someThing/Union.png" alt=""> 
        
         <p class="sone font-light text-base leading-8 text-left ">{{ ImageInfo.name }}</p>
         <p class="text-left  font-light text-sm  font-xs">{{ImageInfo.about}}</p>
     </div>
        </div>
          </div>
     </div>
      <Form/>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Form from '@/components/landing/Form.vue'
export default {
    name:"Partners",
    computed:mapGetters(["Pinfo"]),
    methods:mapActions(["fetchPartner"]),
  async mounted(){
   return this.fetchPartner()
  },
  components:{
    Form
  }
}
</script>