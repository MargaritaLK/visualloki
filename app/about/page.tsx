import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function About() {
    return (
        <div>
            <Navbar />
               
        <div className=" pt-[120px] min-h-screen flex-col items-center justify-between p-20 bg-[#354545]">

            <div className='my-20 w-3/5'>
            {/* flex text-[#AAAFAF]  tracking-wider text-transform:uppercase py-10 */}
     


            <div className='text-[#e77148]  tracking-wider font-bold'>About the project</div>
            
            <div className='text-[#AAAFAF]  tracking-wider py-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Porro excepturi at dolor veritatis sint corporis ipsum veniam voluptates, 
                 nihil est accusantium quod repellat fuga animi perspiciatis nesciunt quibusdam odit sapiente?
                 
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium 
                 voluptas quaerat ipsa labore officiis incidunt molestiae obcaecati illo voluptatibus molli
                 tia illum suscipit dolorem expedita repellendus, ducimus praesentium magni veniam eos?
            </div>


            <div className='text-[#AAAFAF] tracking-wider py-50'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 Porro excepturi at dolor veritatis sint corporis ipsum veniam voluptates, 
                 nihil est accusantium quod repellat fuga animi perspiciatis nesciunt quibusdam odit sapiente?
                 
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium 
                 voluptas quaerat ipsa labore officiis incidunt molestiae obcaecati illo voluptatibus molli
                 tia illum suscipit dolorem expedita repellendus, ducimus praesentium magni veniam eos?
            </div>

            {/* <div></div> */}
            <div className='text-[#e77148] my-20 tracking-wider'>link to report</div>

            </div>


        </div>
        <Footer />
        </div>
    )
}