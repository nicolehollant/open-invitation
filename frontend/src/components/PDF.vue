<template>
<div class="w-full h-full bg-yellow-100" id="pdf--renderer">
  <div class="overflow-scroll snap-y-proximity relative w-max h-full m-auto flex justify-center" id="document-wrapper">
    <div class="relative top-0 space-y-3" v-if="ready" :key="pdfkey">
      <canvas 
        :id="['document-preview', index + 1].join('-')"
        class="snap-center"
        v-for="(_, index) of Array(numPages)"
        :key="['page', index].join('-')"
      />
    </div>
  </div>
</div>
</template>

<script>
import pdfjsLib from 'pdfjs-dist'
import { useFullscreen } from '@/composables/useFullscreen'
import { ref, onMounted, onBeforeUnmount } from '@vue/composition-api'
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry'

export default {
  name: 'pdf',
  props: {
    src: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const currentPage = ref(1)
    const numPages = ref(1)
    const pdfDocument = ref(null)
    const scalar = ref(3)
    const ready = ref(false)
    const pdfkey = ref(1)

    useFullscreen(() => {
      pdfkey.value++
      requestAnimationFrame(showPage)
      setTimeout(() => {
        requestAnimationFrame(showPage)
      }, 1000);
    })

    pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

    function showPage() {
      for(let i = 1; i <= numPages.value; i++) {
        pdfDocument.value.getPage(i).then(page => {
          const renderBox = document.querySelector('#pdf--renderer')
          const maxWidth = renderBox.clientWidth
          const maxHeight = renderBox.clientHeight

          let viewport = page.getViewport({ scale: maxWidth / page.getViewport({ scale: 1.0 }).width })
          const scaledHeight = viewport.height

          if(scaledHeight > maxHeight) {
            viewport = page.getViewport({ scale: maxHeight / page.getViewport({ scale: 1.0 }).height })
          }

          const container = document.querySelector(['#document-preview', i].join('-'))
          container.style.width = viewport.width + 'px'
          container.style.height = viewport.height + 'px'
          container.width = viewport.width * scalar.value
          container.height = viewport.height * scalar.value

          if(scaledHeight > maxHeight) {
            viewport = page.getViewport({ scale: maxHeight / page.getViewport({ scale: 1 / scalar.value }).height })
          } else {
            viewport = page.getViewport({ scale: maxWidth / page.getViewport({ scale: 1 / scalar.value }).width })
          }

          const renderCtx = {
            canvasContext: container.getContext('2d'),
            viewport
          }
          if (renderCtx.canvasContext) {
            renderCtx.canvasContext.clearRect(0, 0, container.width, container.height)
            renderCtx.canvasContext.beginPath()
          }
          const renderTask = page.render(renderCtx)
          renderTask.promise.then(() => {})
        })
      }
    }

    function loadPdfContents(loadingTask) {
      loadingTask.promise.then(doc => {
        if (pdfDocument.value) {
          pdfDocument.value.destroy()
        }
        numPages.value = doc._pdfInfo.numPages
        pdfDocument.value = doc
        showPage()
      })
      ready.value = true
    }

    onMounted(() => {
      loadPdfContents(pdfjsLib.getDocument(props.src))
      window.onresize = () => {
        ready.value = false
        showPage()
        ready.value = true
      }
    })

    onBeforeUnmount(() => {
      pdfDocument.value.destroy()
    })

    return {
      currentPage,
      numPages,
      pdfDocument,
      scalar,
      ready,
      pdfkey
    }
  }
}
</script>

<style lang="postcss">
.snap-y-proximity {
  scroll-snap-type: y proximity;
}
.snap-center {
  scroll-snap-align: center;
}
</style>