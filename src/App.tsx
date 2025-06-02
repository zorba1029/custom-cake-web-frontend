import './App.css'
import { Provider as ReduxProvider } from 'react-redux'
import { useStore } from './store'
import { DndProvider } from 'react-dnd/dist/core'
import { HTML5Backend } from 'react-dnd-html5-backend'
import SourceImageUploader from './pages/SourceImageUploader'
import EdgedImageEditor from './pages/EdgedImageEditor'
import ColoredImageUploader from './pages/ColoredImageUploader'
import GeneratedSDXLImageView from './pages/GeneratedSDXLImageView'


function App() {
  const store = useStore()

  return (
    <ReduxProvider store={store}>
      <div 
          onDrop={(e) => {e.preventDefault(); e.stopPropagation()}}
          onDragOver={(e) => {e.preventDefault(); e.stopPropagation()}}
          onDragEnter={(e) => {e.preventDefault(); e.stopPropagation()}}
          onDragLeave={(e) => {e.preventDefault(); e.stopPropagation()}}>
          <DndProvider backend={HTML5Backend}>
              <SourceImageUploader />
              <EdgedImageEditor />
              <ColoredImageUploader />
              <GeneratedSDXLImageView />
          </DndProvider>
      </div>
    </ReduxProvider>
  )
}

export default App


// cp -r dist/* ../custom-cake-back/public/