<template>
  <div class="bg-white pt-44">
    <div class="container mx-auto">
      <p class="ml-12 textee text-2xl font-normal mt-2">О нас</p>
      <div class="flex w-full">
        <div>
          <img src="@/assets/alotbook.png" alt="" />
        </div>
        <div class="ml-5">
          <p class="textee font-bold text-6xl">Почему UST?</p>
          <p class="w-96 pt-6 font-xs">
            К услугам наших клиентов разработка программного обеспечения на
            заказ, проектирование пользовательских интерфейсов, создание сайтов
            (в том числе на основе индивидуальной CMS) и их поддержка. Мы также
            предлагаем услугу IT-консалтинга — налаживание работы любых
            информационно-аналитических систем и онлайн-решений компании для
            большей эффективности бизнес-процессов. Сегодня компания «Union
            Smart Technology» имеет представительства с умелыми
            project‑менеджерами в РФ и Словакии. Такая география позволяет
            привлекать наиболее ответственных и квалифицированных программистов
            и живо реагировать на потребности заказчиков со всего света,
            сохраняя комфортный уровень цен.
          </p>
          <div class="flex mt-12 justify-center">
            <button class="mr-4 py-3.5 w-full knop">Вакансии</button>
            <button class="ml-4 knop py-3.5 w-full">Читать далее</button>
          </div>
        </div>
      </div>
      <div class="container mx-auto mt-44">
        <p class="textee text-2xl font-normal mt-2">Наши предложения</p>
        <p class="textee font-bold text-6xl">Разработка полного цикла</p>
        <p class="w-6/12 pt-6 font-xs">
          Мы можем разработать для вас любое индивидуальное решение. Наша
          компания обладает широкими возможностями для успешного создания
          технически-сложных систем.
        </p>
        <div class="flex flex-wrap mt-20 align-center">
          <div class="w-2/6">
            <img src="@/assets/wrapIcon/key.png" />
            <div>
              <p class="sone font-normal text-lg mt-6">Программируем</p>
              <p class="w-96 mt-2.5">
                Создаём расширяемую архитектуру, пишем чистый и стабильный код.
                Интегрируемся с технологиями заказчика.
              </p>
            </div>
          </div>

          <div class="w-2/6">
            <img src="@/assets/wrapIcon/search.png" />
            <div>
              <p class="sone font-normal text-lg mt-6">Тестируем</p>
              <p class="w-96 mt-2.5">
                Проводим ручное функциональное тестирование и пишем
                UI-автотесты. Готовим чек-листы и тест-кейсы.
              </p>
            </div>
          </div>

          <div class="w-2/6 py-auto">
            <img src="@/assets/wrapIcon/phone.png" />
            <div>
              <p class="sone font-normal text-lg">Поддерживаем</p>
              <p class="w-96 mt-2.5">
                Работаем по SLA. Следим за стабильностью работы приложения, и
                версии iOS и Android.
              </p>
            </div>
          </div>

          <div class="w-2/6 mt-4">
            <img src="@/assets/wrapIcon/icon.png" />
            <div>
              <p class="sone font-normal text-lg mt-6">Анализируем</p>
              <p class="w-96 mt-2.5">
                Пишем ТЗ для разработки, учитывая бизнес-процессы и технологии
                заказчика и потребности пользователей.
              </p>
            </div>
          </div>

          <div class="w-2/6 mt-4">
            <img src="@/assets/wrapIcon/system.png" />
            <div>
              <p class="sone font-normal text-lg mt-6">Программируем</p>
              <p class="w-96 mt-2.5">
                Создаём расширяемую архитектуру, пишем чистый и стабильный код.
                Интегрируемся с технологиями заказчика.
              </p>
            </div>
          </div>

          <div class="w-2/6 mt-4">
            <img src="@/assets/wrapIcon/cyrcle.png" />
            <div>
              <p class="sone font-normal text-lg mt-6">Прототипируем</p>
              <p class="w-96 mt-2.5">
                Прорабатываем пользовательские сценарии, проектируем логику
                приложения, скечируем основные экраны.
              </p>
            </div>
          </div>
        </div>
        <div class="flex mt-16 purplee">
          <p>Все услуги</p>
          <i
            class="mx-2 my-auto fa-solid fa-arrow-right-long focus:outline-none"
          ></i>
        </div>
      </div>
    </div>
    <div class="relative mt-48">
      <div class="mx-auto text-center bge py-28">
        <p class="textee text-2xl font-normal">Портфолио</p>
        <p class="textee font-bold text-6xl relative">Завершенные проекты</p>
        <p class="">
          Мы специализируемся на предоставлении программного обеспечения
          высшего<br />
          качества и предоставлении высококвалифицированных команд с опытом в
          области<br />
          разработки блокчейнов, аналитики больших данных и AI/ML, а также услуг
          по<br />
          разработке программного обеспечения на заказ.
        </p>
        <div class="mt-6" > <!--  it's vuex cycle -->
          <div class="flex justify-center">
            <div  class="p-10"  v-for="information in NInfo" :key="information.id">
              <img class="relative" src="@/assets/project/atol.png" alt="" />
              <div class="relative" >
              <p class="textee text-2xl font-normal">{{ information.name }} </p>
              <p class="absolute">{{ information.about }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="container mx-auto flex pt-8"><!--It's banner -->
            <div class="mr-4">      
                <img src="@/assets/project/prorab.png" alt="">
                <p class="textee text-2xl font-normal flex justify-start">Prorab-x</p>
                <p class="flex justify-start">Мобильное приложение для строителей</p>
               
            </div>
              <div class="ml-4">
                <img src="@/assets/project/Rectangle.png" alt="">
                <p class="textee text-2xl font-normal flex justify-start">Актуаль</p>
                <p class="flex justify-start">Сайт промом игры</p>
                
              </div>
        </div><!--It's button need to do router-link -->
          <div class="flex justify-center">
            <button class="mr-4 py-3.5 w-96  mt-20  knop">Портфолио</button>
            <button class="ml-4 knop py-3.5 w-96  mt-20">Заказать проект</button>
          </div>
            <Partners/>
      </div>
      
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Partners from "@/components/landing/Partners.vue"
export default {
 name:'NavBody',
 computed: mapGetters(["NInfo"]),
  methods:mapActions(['fetchinfo']),
 async mounted(){
  return this.fetchinfo()
  },
  components:{
    Partners
  }

};
</script>