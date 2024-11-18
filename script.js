
var Products=[
    {name:"មុខម្ហូបខ្មែររសជាតិដើម២២មុខ",pic:"kh1.jpg",disscripions:"(ភ្នំពេញ)៖ មុខម្ហូបខ្មែរមានច្រើនយ៉ាង ដូចជា ស្ល ឆា ចៀន ស្ងោរ បង្អែមជាដើម និងមានរសជាតិប្លែកៗពីគ្នា ត្រូវបានរៀបចំយ៉ាងពិសេសត្រៀមចាំទទួលភ្ញៀវនៅភោជនីយដ្ឋានផ្កាខ្ញី ដែលសុទ្ធសឹងជាម្ហូបខ្មែររសជាតិដើម គិតគូរដល់សុខភាពអតិថិជន ដោយប្រើប្រាស់សុទ្ធតែបន្លែក្នុងស្រុក ប្រើប្រេងអូលីវ១០០% និងមិនប្រើប្រាស់ប៊ីចេង ប្រមូលផ្ដុំដោយមុខម្ហូបជាច្រើនជម្រើស ព្រមទាំងចម្អិនដោយថ្វីដៃចុងភៅមានបទពិសោធន៍ប្រចាំហាង។"},
    {name:"មុខម្ហូបខ្មែររសជាតិដើម២២មុខ",pic:"kh2.jpg",disscripions:"(ភ្នំពេញ)៖ មុខម្ហូបខ្មែរមានច្រើនយ៉ាង ដូចជា ស្ល ឆា ចៀន ស្ងោរ បង្អែមជាដើម និងមានរសជាតិប្លែកៗពីគ្នា ត្រូវបានរៀបចំយ៉ាងពិសេសត្រៀមចាំទទួលភ្ញៀវនៅភោជនីយដ្ឋានផ្កាខ្ញី ដែលសុទ្ធសឹងជាម្ហូបខ្មែររសជាតិដើម គិតគូរដល់សុខភាពអតិថិជន ដោយប្រើប្រាស់សុទ្ធតែបន្លែក្នុងស្រុក ប្រើប្រេងអូលីវ១០០% និងមិនប្រើប្រាស់ប៊ីចេង ប្រមូលផ្ដុំដោយមុខម្ហូបជាច្រើនជម្រើស ព្រមទាំងចម្អិនដោយថ្វីដៃចុងភៅមានបទពិសោធន៍ប្រចាំហាង។"},
    {name:"មុខម្ហូបខ្មែររសជាតិដើម២២មុខ",pic:"kh3.jpg",disscripions:"(ភ្នំពេញ)៖ មុខម្ហូបខ្មែរមានច្រើនយ៉ាង ដូចជា ស្ល ឆា ចៀន ស្ងោរ បង្អែមជាដើម និងមានរសជាតិប្លែកៗពីគ្នា ត្រូវបានរៀបចំយ៉ាងពិសេសត្រៀមចាំទទួលភ្ញៀវនៅភោជនីយដ្ឋានផ្កាខ្ញី ដែលសុទ្ធសឹងជាម្ហូបខ្មែររសជាតិដើម គិតគូរដល់សុខភាពអតិថិជន ដោយប្រើប្រាស់សុទ្ធតែបន្លែក្នុងស្រុក ប្រើប្រេងអូលីវ១០០% និងមិនប្រើប្រាស់ប៊ីចេង ប្រមូលផ្ដុំដោយមុខម្ហូបជាច្រើនជម្រើស ព្រមទាំងចម្អិនដោយថ្វីដៃចុងភៅមានបទពិសោធន៍ប្រចាំហាង។"},
    {name:"មុខម្ហូបខ្មែររសជាតិដើម២២មុខ",pic:"kh4.jpg",disscripions:"(ភ្នំពេញ)៖ មុខម្ហូបខ្មែរមានច្រើនយ៉ាង ដូចជា ស្ល ឆា ចៀន ស្ងោរ បង្អែមជាដើម និងមានរសជាតិប្លែកៗពីគ្នា ត្រូវបានរៀបចំយ៉ាងពិសេសត្រៀមចាំទទួលភ្ញៀវនៅភោជនីយដ្ឋានផ្កាខ្ញី ដែលសុទ្ធសឹងជាម្ហូបខ្មែររសជាតិដើម គិតគូរដល់សុខភាពអតិថិជន ដោយប្រើប្រាស់សុទ្ធតែបន្លែក្នុងស្រុក ប្រើប្រេងអូលីវ១០០% និងមិនប្រើប្រាស់ប៊ីចេង ប្រមូលផ្ដុំដោយមុខម្ហូបជាច្រើនជម្រើស ព្រមទាំងចម្អិនដោយថ្វីដៃចុងភៅមានបទពិសោធន៍ប្រចាំហាង។"}

]
  
var result="";
Products.map((e)=>{
    result+=`
        <div class="col-xl-3 col-md-4 col-md-6 col-sm-12 mt-2">
                <div class="card p-3">
                    <img src="img/${e.pic}" alt="">
                    <div class="card-body">
                        <h3 class="name">${e.name}</h3>
                        <p class="discription">${e.disscripions}</p>

                    </div>
                </div>

            </div>
    `;
    document.querySelector('.row').innerHTML=result;

  
 

})