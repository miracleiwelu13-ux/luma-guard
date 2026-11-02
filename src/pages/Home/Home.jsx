import Hero from '../../sections/Hero/Hero'
import Problem from '../../sections/Problem/Problem'
import AssessmentTeaser from '../../sections/AssessmentTeaser/AssessmentTeaser'
import FeaturesTeaser from '../../sections/FeaturesTeaser/FeaturesTeaser'
import Pricing from '../../sections/Pricing/Pricing'
import ResourcesTeaser from '../../sections/ResourcesTeaser/ResourcesTeaser'
export default function Home() {
  return (
    <div>
      <Hero />
      <Problem />
      <AssessmentTeaser />
      <FeaturesTeaser />
      <Pricing />
      <ResourcesTeaser /> 
    </div>
  )
}