import Hero from '../../sections/Hero/Hero'
import Problem from '../../sections/Problem/Problem'
import AssessmentTeaser from '../../sections/AssessmentTeaser/AssessmentTeaser'
import FeaturesTeaser from '../../sections/FeaturesTeaser/FeaturesTeaser'
import ResourcesTeaser from '../../sections/ResourcesTeaser/ResourcesTeaser'
import Pricing from '../../sections/Pricing/Pricing'
import './Home.css'

export default function Home() {
  return (
    <div>
      <Hero />
      <Problem />
      <AssessmentTeaser />
      <FeaturesTeaser />
      <ResourcesTeaser />
      <Pricing />
    </div>
  )
}