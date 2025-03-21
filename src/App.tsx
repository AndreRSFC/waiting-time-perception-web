import { useEffect, useState } from 'react'
import { LoadingTypesEnum } from './app.constant'
import { Overlay } from './app.style'
import { fetchDataAfterDelay } from './app.util'
import { BottomBar } from './bottom-bar'
import { TopBar } from './header'
import { ResearchEndImage, ResearchImage } from './images'
import { Modal } from './modal'
import {
  NewsBar,
  NewsBarSkeleton,
  NewsPage,
  NewsSkeleton,
  NewsSpinner,
  NewsSpinnerSkeleton,
} from './news'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [loadingQueue, setLoadingQueue] = useState<LoadingTypesEnum[] | null>(
    null
  )
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isBottomBarVisible, setIsBottomBarVisible] = useState(false)
  const [isOverlayVisible, setIsOverlayVisible] = useState(true)
  const [isStudyStarted, setIsStudyStarted] = useState(false)

  useEffect(() => {
    const types = Object.values(LoadingTypesEnum)
    const shuffledQueue = types.sort(() => Math.random() - 0.5)
    setLoadingQueue(shuffledQueue)
  }, [])

  const handleNextLoading = () => {
    if (!loadingQueue || currentIndex >= loadingQueue.length - 1) return

    setIsBottomBarVisible(false)
    setIsLoading(true)

    fetchDataAfterDelay().then(() => {
      setIsLoading(false)
      setCurrentIndex(prevIndex => prevIndex + 1)
      setTimeout(() => setIsBottomBarVisible(true), 500)
    })
  }

  const handleFinishStudy = () => {
    setIsOverlayVisible(true)
    setIsBottomBarVisible(false)
  }

  const onStart = () => {
    setIsStudyStarted(true)
    setIsLoading(true)
    setIsOverlayVisible(false)
    handleNextLoading()
  }

  const goToForm = () => {
    const formUrl = 'https://linkdoformulario.com'
    window.location.href = formUrl
  }

  if (!loadingQueue) return null

  return (
    <>
      <TopBar />
      {isLoading && loadingQueue[currentIndex] === LoadingTypesEnum.SPINNER && (
        <NewsSpinner />
      )}
      {isLoading && loadingQueue[currentIndex] === LoadingTypesEnum.BAR && (
        <NewsBar />
      )}
      {isLoading &&
        loadingQueue[currentIndex] === LoadingTypesEnum.SKELETON && (
          <NewsSkeleton />
        )}
      {isLoading &&
        loadingQueue[currentIndex] === LoadingTypesEnum.SKELETON_BAR && (
          <NewsBarSkeleton />
        )}
      {isLoading &&
        loadingQueue[currentIndex] === LoadingTypesEnum.SKELETON_SPINNER && (
          <NewsSpinnerSkeleton />
        )}
      {!isLoading && <NewsPage />}
      <BottomBar
        isBottomBarVisible={isBottomBarVisible}
        onClickToFinish={handleFinishStudy}
        onClickToNext={handleNextLoading}
        isLastItem={currentIndex < loadingQueue.length - 1}
      />
      {isOverlayVisible && (
        <Overlay>
          <Modal
            onClick={goToForm}
            image={<ResearchEndImage />}
            text={
              'Muito obrigado por participar do estudo! Sua resposta será essencial para a validação deste trabalho. Para acessar o formulário, clique no botão abaixo.'
            }
            title={'Fim do Estudo'}
            buttonText={'Ir para o Formulario'}
          />
        </Overlay>
      )}

      {!isStudyStarted && (
        <Overlay>
          <Modal
            onClick={onStart}
            image={<ResearchImage />}
            text={`Este site foi criado como parte do Trabalho de Conclusão de Curso do
        curso de Sistemas de Informação da PUC Minas, unidade Barreiro. Após
        navegar em nosso sistema, será necessário responder a uma pesquisa, cujo
        link estará disponível no final. Os dados coletados serão usados
        exclusivamente para a pesquisa e são totalmente anônimos. Agradecemos
        pela sua participação! 😊`}
            title={'Estudo sobre carregamento'}
            buttonText={'Começar Estudo'}
          />
        </Overlay>
      )}
    </>
  )
}

export default App
