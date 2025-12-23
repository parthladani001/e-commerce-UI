import Card from "./Card";
import Team from "./Team";
import Services from "../home/Services";

function About() {
  return (
    <>
    <div className="min-h-screen flex flex-col">
    <section className="flex-1 flex items-center overflow-x-hidden ms:mt-5">
      <div className="w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="flex justify-end px-4 md:px-0">
            <div className="max-w-md w-full md:mr-20">
              <h1 className="text-4xl font-medium mb-3">Our Story</h1>
              <p className="text-muted-foreground mb-8">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
              <p className="text-muted-foreground mb-8">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging from consumer.</p>
            </div>
          </div>
          <div className="block">
            <div className="rounded-sm overflow-hidden flex justify-center md:justify-end">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3VyJTIwc3Rvcnl8ZW58MHx8MHx8fDA%3D"
                alt="Person with telling about story"
                className="w-full sm:w-11/12 md:w-3/4 h-auto object-cover mix-blend-multiply"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div>
    <Card />
  </div>
  <div>
    <Team />
  </div>
  <div className="mb-5">
    <Services />
  </div>
    </>
  )
}

export default About