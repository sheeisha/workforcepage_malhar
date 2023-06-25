


document.addEventListener("DOMContentLoaded", e => {
    const store = {
      "Forbidden City":"They (net)work their way through everything that they need for Malhar and did the \"Am I audible?\" with an audience before it was the new normal. Supreme graphics, expert salesman shop and technical expertise is what they bring to the table!" ,
      "Jingshan Park":"Computers as a department chooses to reside on Discord. In addition to the painful tracking down of bugs and fixing them, you'll probably find one member of the department or another awake at any time of the day. Finding snippets of code through infinite hours of scrolling, clear out something thats \"bugging\" you, or helping the other OGs with all the problems in their computers. All these fall right under their domain." ,
      "Temple of Heaven":"If there is one department that aims to make Malhar an insightful experience, it is Conclave. Bagging the title of ‘Elites’, department conclave does justice to it every year with their list of speakers that reflect vision and innovation at best. They know how to multitask and keep calm under pressure." ,
      "N4":"Creatives has merged with FnD this year to make one big family fuelled by a mutual love-hate relationship with Adobe. The department that ideates and creates and bonds over hunching over their laptops for hours making countless revisions to their work. Last minute changes and digital art are their priorities. They perpetually run on all-nighters and sticker collections." ,
      "Beihai Park": "This department is the face of the festival. They know what to sell and how to sell it. Ranging starkly from being multi-taskers to multi-linguists. They truly understand the aesthetics of Malhar and carefully put it on a platter for the world to watch. If you see the booming Instagram stats, you know that the PR masterminds are proud of their good work.",
      "Houhai Park": "Large-scale backdrops and installations can assist in establishing the theme of Malhar on the festival days, or you can express your creativity and showcase your artistic talent through customized goods, paintings, and calligraphy!",
      "Yuyuantan Park": "The fact that we at FnD see everything makes us the most stunning department ever! There are no questions. We are totally responsible for the workplace becoming 10 times friendlier thanks to our cameras! We are a friendly group of individuals who want to have fun while seeming like experts by using terms like ISO, Aperture, Shutter Speed, etc. Trust us, we do. Copyrights adore us a little too much, and we wish we could return the favor.",

    };
    
    // const nav = document.querySelector(".navbar");
    // const nav_brand = document.querySelector(".navbar .brand");
    // const nav_tabs = document.querySelector(".navbar .tabs");
    // const nav_menu_btn = document.querySelector(".navbar .menu-btn"); 
    // let md = 920;
    
    // nav_menu_btn.onclick = e => {
    //   let window_width = window.innerWidth;
    //   if(window_width<=md)
    //     nav_tabs.classList.toggle("hidden");
    //   else
    //     nav_tabs.classList.remove("hidden");
    // }
    
    const btn_l = document.querySelector(".btn-left");
    const btn_r = document.querySelector(".btn-right");
    const slider = document.querySelector(".carousel-slider");
    const labels = document.querySelectorAll(".carousel-label");
    const description = document.querySelector(".carousel-description");
    const items = document.querySelectorAll(".carousel-item");
    const num_item = items.length - 2;
  
    let item_width = items[0].clientWidth;
    let count = 1;
    let slide_r = 1;
    let slide_l = -1;
    let active_label = document.querySelector(".carousel-label.active");
    
    // if(window.innerWidth<=md)
    //     nav_tabs.classList.add("hidden");
    
    // window.onresize = e => {
    //   item_width = items[0].clientWidth;
    //   if(window.innerWidth<=md)
    //     nav_tabs.classList.add("hidden");
    // }
    
    function slide(direction){ 
      // if (count == num_item-1 || count==0) return;
      active_label.classList.remove("active");     
      if(direction===slide_r)
        count++;
      else if(direction===slide_l)
        count--;
      
      let item = items[count];
      
      active_label = document.querySelector(`.carousel-label[for="${item.name}"]`);
      active_label.classList.add("active");     
      
      description.innerText = store[item.name];
      slider.style.transform = `translateX(${-count * item_width}px)`;
      slider.style.transition = "0.75s ease-out";     
    }
    
    btn_r.onclick = e => {
      slide(slide_r); 
    }
    
    btn_l.onclick = e => {
      slide(slide_l);
    }
    
    slider.ontransitionend = e => {   
      if(count==num_item+1){
        count = 1;
        slider.style.transform = `translateX(${-item_width}px)`; 
        slider.style.transition = "";
      }
      if(count==0){
        count = num_item;
        slider.style.transform = `translateX(${-num_item * item_width}px)`; 
        slider.style.transition = "";
      }
    }
  });
  
  
  // container 2
  
  document.addEventListener("DOMContentLoaded", e2 => {
    const store2 = {
      "Forbidden City": "These are departments forming the compass that gives the fest direction.What are Management Departments like, you ask? Well they do the tech, the money, the budget AND they're funny.",
      "n4":"Within the university, the department of assistance is in charge of crowd and venue control. We provide care for participants, viewers, and occasionally even other volunteers xD. We ensure that there is little disruption and that all Malhar events go off without a hitch. Along with managing the audience, we also get the pleasure of dealing with every judge that shows up to hear Malhar's case. Basically, we keep things running smoothly by working in the background.",
      "n5":"\"We do everything else after we eat.\" Managing the food and drinks on the days of Malhar is the responsibility of hospitality, a management division and key component of Malhar. Here at Hospitality, we also take care of the participants' lodging requirements and use cardolates to convey to the workers the sentiments and feelings of their fellow participants. Food and drinks are provided during pre-Malhar gatherings as well as during the major Malhar days.",
      "Yuyuantan Park": "We never take a chance. That is why we do frisks. Although the music is loud, we continue to manage the crowd. We really shine when the judges are involved. We carry out our plans because the college's safety is in our hands. We are SECURITY, for your interest. Security is the department for you if you want to have a great Malhar and have a lot of fun while working. It's the largest department, and there is a variety of tasks that necessitates diligent, committed, and vivacious individuals!!!",
      "Jingshan Park": "Mic check 123!” Texxx has its wirlesses and connections with all the other departments of Malhar. Being the warehouse of all technical support, the department illuminates the fest by sweating through the rehearsals, trials and mocks. The drastic effect of the new normal has challenged this bunch of technical people to construct a virtual stage and help people experience Malhar on their screens. Besides being the only big 4 that survived the online set up, Texxx has transitioned into becoming an events department this year.",
      "Temple of Heaven":"Xavier's ‘Moffice’ houses a group of calculative individuals who look after the financing and budgeting of the fest. One might yawn at their monotonous engagement with spreadsheets, organisation, numbers, math and research but that’s where all the money is! When dealing with a tight budget, the finance department is at its best, trying not to compromise on the necessary expenses. The financers tally their puns and funs and always strike a balance between work and play!",
      "Beihai Park":"One of the Big 4, with 3 sub-departments: Classrooms: Ensuring that the lecture halls are aesthetically pleasing to the audience and participants. Bamboo structures are being built all over the college campus by construction, but displays is always (S)Laying down creative ways to exhibit the many theme-related decor. Events: Oversees the setups and logistical needs for events taking place in the Foyer, Hall, and Quad. We only have 2 goals: to keep Malhar and our volunteers content, and to create a single, enduring family!",
      "Houhai Park":" The backbone of Malhar, Marketing brings in all the cash (and much more) that is needed to run the whole show. On a regular day, they are stuck on long, tiring calls, working hard to get the financial support we need for Malhar. Due to their contagious enthusiasm and ambition, they get the work done to get the base ready for Malhar to be built on. Their specialities lie in multitasking and being extremely talented!",
     };
    
    // const nav = document.querySelector(".navbar");
    // const nav_brand = document.querySelector(".navbar .brand");
    // const nav_tabs = document.querySelector(".navbar .tabs");
    // const nav_menu_btn = document.querySelector(".navbar .menu-btn"); 
    // let md = 920;
    
    // nav_menu_btn.onclick = e2 => {
    //   let window_width = window.innerWidth;
    //   if(window_width<=md)
    //     nav_tabs.classList.toggle("hidden");
    //   else
    //     nav_tabs.classList.remove("hidden");
    // }
    
    const btn_l = document.querySelector(".btn-left2");
    const btn_r = document.querySelector(".btn-right2");
    const slider = document.querySelector(".carousel-slider2");
    const labels = document.querySelectorAll(".carousel-label2");
    const description = document.querySelector(".carousel-description2");
    const items = document.querySelectorAll(".carousel-item2");
    const num_item = items.length - 2;
  
    let item_width = items[0].clientWidth;
    let count = 1;
    let slide_r = 1;
    let slide_l = -1;
    let active_label = document.querySelector(".carousel-label2.active");
    
    // if(window.innerWidth<=md)
    //     nav_tabs.classList.add("hidden");
    
    // window.onresize = e2 => {
    //   item_width = items[0].clientWidth;
    //   if(window.innerWidth<=md)
    //     nav_tabs.classList.add("hidden");
    // }
    
    function slide(direction){ 
      // if (count == num_item-1 || count==0) return;
      active_label.classList.remove("active");     
      if(direction===slide_r)
        count++;
      else if(direction===slide_l)
        count--;
      
      let item = items[count];
      
      active_label = document.querySelector(`.carousel-label2[for="${item.name}"]`);
      active_label.classList.add("active");     
      
      description.innerText = store2[item.name];
      slider.style.transform = `translateX(${-count * item_width}px)`;
      slider.style.transition = "0.75s ease-out";     
    }
    
    btn_r.onclick = e2 => {
      slide(slide_r); 
    }
    
    btn_l.onclick = e2 => {
      slide(slide_l);
    }
    
    slider.ontransitionend = e2 => {   
      if(count==num_item+1){
        count = 1;
        slider.style.transform = `translateX(${-item_width}px)`; 
        slider.style.transition = "";
      }
      if(count==0){
        count = num_item;
        slider.style.transform = `translateX(${-num_item * item_width}px)`; 
        slider.style.transition = "";
      }
    }
  });
  
  
  // container 3
  
  
  document.addEventListener("DOMContentLoaded", e3 => {
    const store3 = {
      "Forbidden City": "The ones who are keeping the competitive spirit of Malhar alive and rerouting the legacy of Malhar's events in this never-seen-before virtual setup. It's them who make Malhar as Event-ful as it gets!",
      "Yuyuantan Park": "Have you ever transcended space and time to enter different literary universes? If yes, Literary Arts (LA) is the perfect fit for you! A hub of all things creative, witty, and spontaneous, LA is the place to be if you\’re a writer, public speaker, or dreamer. \"I envision a place where creativity sings, and expression gives you wings\". Well, if that is the case, Welcome to your safe space.",
      "Jingshan Park": "Welcome to the bright side! Overflowing with energy and expression, here’s introducing a riot of unparalleled talent: The World Performing Arts Department. From lyrics to gimmicks, to soulful pirouettes, our events aim to reflect the perfect melange of innovation and emotion. Turn up that bass, grab your headphones and get your groove on because it’s time to hop on to this expedition of unconstrained, limitless creativity.",
      "Temple of Heaven":"",
      "n4":"",
      "n5":"The Backbone of Malhar: Admin keeps the Malhar Machine running smoothly and declares the final winners of Malhar. When in doubt, Admin is the department to fall back on. Being the Rulebook Creator of Malhar, Admin likes to go by their tagline: “You Play By Our Rules.” Be assured that this power packed bunch will have your back!",
      "Beihai Park":"Stuck between reality and a surrealist dream, Fine Arts is an Events department of dedicated people working in a constant state of paint-filled panic. Besides organizing engaging events, FA also curates a homegrown Art Lounge (psst its in LR 22), the theme for which is ‘Art My Weirdest: Dadaism x Absurdism’ this year! Led by an all-female core team, the FA department of Malhar 2022 ‘blends the rules’ to guarantee you the perfect dose of creativity, chaos and colour.",
      "Houhai Park":"Indian Performing Arts believes in staying desi at heart and keeping alive the dynamic and multi-hued culture and art forms of our country. The events will be no less than a powerhouse of talent from magical musical performances, and dazzling dances to eye-opening streetplays. Keep the hearts beating cause it's time for the desi beat! ",
     };
    
    // const nav = document.querySelector(".navbar");
    // const nav_brand = document.querySelector(".navbar .brand");
    // const nav_tabs = document.querySelector(".navbar .tabs");
    // const nav_menu_btn = document.querySelector(".navbar .menu-btn"); 
    // let md = 920;
    
    // nav_menu_btn.onclick = e3 => {
    //   let window_width = window.innerWidth;
    //   if(window_width<=md)
    //     nav_tabs.classList.toggle("hidden");
    //   else
    //     nav_tabs.classList.remove("hidden");
    // }
    
    const btn_l = document.querySelector(".btn-left3");
    const btn_r = document.querySelector(".btn-right3");
    const slider = document.querySelector(".carousel-slider3");
    const labels = document.querySelectorAll(".carousel-label3");
    const description = document.querySelector(".carousel-description3");
    const items = document.querySelectorAll(".carousel-item3");
    const num_item = items.length - 2;
  
    let item_width = items[0].clientWidth;
    let count = 1;
    let slide_r = 1;
    let slide_l = -1;
    let active_label = document.querySelector(".carousel-label3.active");
    
    // if(window.innerWidth<=md)
    //     nav_tabs.classList.add("hidden");
    
    // window.onresize = e => {
    //   item_width = items[0].clientWidth;
    //   if(window.innerWidth<=md)
    //     nav_tabs.classList.add("hidden");
    // }
    
    function slide(direction){ 
      // if (count == num_item-1 || count==0) return;
      active_label.classList.remove("active");     
      if(direction===slide_r)
        count++;
      else if(direction===slide_l)
        count--;
      
      let item = items[count];
      
      active_label = document.querySelector(`.carousel-label3[for="${item.name}"]`);
      active_label.classList.add("active");     
      
      description.innerText = store3[item.name];
      slider.style.transform = `translateX(${-count * item_width}px)`;
      slider.style.transition = "0.75s ease-out";     
    }
    
    btn_r.onclick = e3 => {
      slide(slide_r); 
    }
    
    btn_l.onclick = e3 => {
      slide(slide_l);
    }
    
    slider.ontransitionend = e3 => {   
      if(count==num_item+1){
        count = 1;
        slider.style.transform = `translateX(${-item_width}px)`; 
        slider.style.transition = "";
      }
      if(count==0){
        count = num_item;
        slider.style.transform = `translateX(${-num_item * item_width}px)`; 
        slider.style.transition = "";
      }
    }
  });