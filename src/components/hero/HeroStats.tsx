export default function HeroStats(){

const stats=[

["2500+","Students"],

["7+","Years"],

["100%","Placement Assistance"]

]

return(

<div className="mt-16 flex flex-wrap gap-8 sm:gap-12">

{

stats.map(([value,label])=>(

<div key={label}>

<h2 className="text-2xl sm:text-4xl font-bold text-[#F1EAD8]">

{value}

</h2>

<p className="text-[#C9B699]">

{label}

</p>

</div>

))

}

</div>

)

}