import React from 'react'
// components
import Sidebar from '../../components/sidebar/Sidebar'
// style
import './Services.scss'
import unsplash1 from '../../img/unsplash1.webp';
import hotel2 from '../../img/hotel-2.jpg';
import hotel3 from '../../img/hotel-3.jpg';

const Services = () => {
  return (
    <div className='services'>
      <Sidebar />
      <div className='rows'>
        <br />
        <div className='rows-section'>
          <div className='column-1'>
            <h2>Tree Maintenance</h2>
            <p>
              Since 1982, American Arbor has worked proudly in the tree care
              industry with keen interest in both the quality and the
              practicality of services we offer.
              {/* <br />
              <br /> */}
              Because all landscapes represent significant investments initially
              and over time; and because such investments are intended to
              beautify properties while enhancing value, maintenance tasks
              should have clearly defined objectives which preserve and increase
              that value, and never detract from it.
              <br />
              <br />
              American Arbor takes great pride in offering tree management tasks
              and plans that make good sense; avoiding excessive and/or damaging
              practices, which unfortunately remain quite common in the green
              industry. While we receive many requests to perform various
              unnecessary and deleterious tasks, we are proud to avoid them, and
              work instead to serve our clients’ long-term interests. Our
              service is comprehensive. We see more than the unobvious pruning
              of your valuable landscape trees and other plants.
              {/* <br /> */}
              <br />
              {/* Without question, unnecessary, poorly executed and excessive
              pruning are among the chief stressors your landscape trees are
              subject to. Let American Arbor help you see the real needs of your
              valuable landscape plants. We know trees, and can help you know
              them too. */}
              <br />
              <br />
              {/* There are of course plenty of legitimate pruning needs in
              landscape trees and other plants, and provided such work is
              carried out properly, your trees structure, longevity and
              appearance may be enhanced. American Arbor employs only highly
              skilled arborists and tree workers, certified by the International
              Society of Arboriculture, to ensure your trees receive the
              precise, conservative attention they deserve. */}
              {/* <br />
              <br /> */}
            </p>
          </div>
        </div>
        <br />
        <div className='rows-section'>
          <div className='column-2'>
            <h2>Landscape Management</h2>
            <p>
              Many properties, including HOA’s, golf courses and commercial complexes, 
              can benefit greatly utilizing a management plan created by American Arbor. 
              This tool, which begins with an inventory of existing trees and their needs, 
              enable the property manager to recognize and prioritize maintenance tasks 
              so that needs may be addresses over time, within budget and have true merit.
              <br />
              <br />
              American Arbor takes great pride in avoiding superfluous tasks and those 
              that actually result in increased maintenance over time. This is especially 
              the case with regard to pruning: much of what we see is simply contraindicated,
              and for a plethora of reasons. Management plans by American Arbor address only 
              the true pruning needs and other factors influencing each tree’s health and structure.
              {/* <br />
              <br /> */}
              <br />
              <br />
              {/* The phasing out of non-sustainable landscape trees and shrubs allows for 
              their replacement with well-chosen plants perfectly suited to location, 
              enhancing beauty, diversity and value over time. */}
              {/* <br />
              <br /> */}
              Management plans by American Arbor allow Davis and Sacramento property owners 
              and managers to avoid the expense and impact of unnecessary pruning, and 
              serve to provide focus into the real needs of their gardens over time. 
              American Arbor offers a glimpse into the future and tailors a plan that 
              optimizes that future.
              {/* <br />
              <br />
              From roses to redwoods, if it grows, we know how to care for it
              properly. */}
            </p>
          </div>
        </div>
        <br />
        <div className='rows-section'>
          <div className='column-3'>
            <h2>Tree Preservation</h2>
            <p>
              California’s drought has provided plant health care providers with a long-sought 
              opportunity to address a very real problem in countless landscapes. 
              {/* <br />
              <br /> */}
              Quite simply, in all but the best drained soils, trees and lawns are poor 
              combinations. Water displaces soil gases, including oxygen, and oxygen-deprived 
              roots lead to vulnerable trees and premature decline. This availability of 
              gaseous oxygen to tree roots is a fundamental physiological need, and tree 
              deprived of it due to over-irrigation and/or poor drainage suffers over time. This is fact. 
              <br />
              <br />
              American Arbor has always addressed this problem on properties we serve, but reduction 
              of lawn area and irrigation volume has often been met with resistance by property owners
              and lawn maintenance firms. People love their lawns.
              {/* <br />
              <br /> */}
              Nature provides for soil enhancing organic layers under the trees and other plants. 
              Such layers have many benefits: improved soil structure and fertility, better gas 
              exchange, increased beneficial microbial activity and soil temperature moderation, just to name a few. 
              {/* <br />
              <br /> */}
              {/* American Arbor utilizes a variety of material in place of water-needy lawn grass’ including 
              simple but attractive mulches, combinations of mulches and stone and drought tolerant 
              groundcover plants. All mulch application is preceded by inoculation of the soil with 
              root enhancing nycorrhizol fungi in solution. Mycorrhizae are root symbionts critical 
              to optimal root function. Once installed, a mulch bed provides an ideal environment not 
              only for existing trees, but also for new plants carefully tailored to your property, 
              enhancing diversity, age variation and longevity.  */}
              <br />
              <br />
              {/* Sheet mulching, which involves the layering of various materials over a paper base, 
              permits lawn conversions without the need of sod cutters and chemical applications. 
              Call American Arbor today for ideas suited to your property and tastes. While 
              conserving water and its costs, this effort is the single best thing you can do to 
              optimize the health and longevity of your trees and other valuable landscape plants. */}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
