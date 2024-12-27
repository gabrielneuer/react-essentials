import { useState } from 'react';
import componentsImg from './assets/components.png'
import { CORE_CONCEPTS } from './data'
import Header from './components/Header/Header'
import CoreConcept from './components/CoreConcept/CoreConcept';
import TabButton from './components/TabButton';
import { EXAMPLES } from './data';

function App() {

  // const [selectedTopic, setSelectedTopic] = useState('components');
  const [selectedTopic, setSelectedTopic] = useState();

  // let tabContent = 'Please click a button'
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)
    // console.log(selectedTopic)
  }

  let tabContent = <p>Please select a topic</p>
  if (selectedTopic) {
    tabContent = (
      <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    )
  }

  return (
    <div>
      <Header />

      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptIem)=>(
              <CoreConcept key={ conceptIem.title } {...conceptIem}/>
            ))}
          </ul>
        </section>

        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === 'components'}
              label='Components'
              onSelect={() => handleSelect('components')}
            />
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              label='JSX'
              onSelect={() => handleSelect('jsx')}
            />
            <TabButton
              isSelected={selectedTopic === 'props'}
              label='Props'
              onSelect={() => handleSelect('props')}
            />
            <TabButton
              isSelected={selectedTopic === 'state'}
              label='State'
              onSelect={() => handleSelect('state')}
            />
          </menu>
            {tabContent}
        </section>
      </main>
    </div>
  );
}
export default App;