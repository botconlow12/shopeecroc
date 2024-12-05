;(() => {
    console.log('utms script loaded! 2.3.11')
  
    // Classe utilitária para manipulação de parâmetros de URL
    class UtmHandler {
      static addUtmParametersToUrl(url) {
        const baseUrl = UtmHandler.urlWithoutParams(url)
        const urlParams = UtmHandler.paramsFromUrl(url)
        const utmParams = UtmHandler.getUtmParameters()
  
        // Constrói novos parâmetros de URL com os parâmetros UTM
        utmParams.forEach((value, key) => {
          urlParams.append(key, value)
        })
  
        // Garante que não haja duplicatas nos parâmetros da URL
        const finalParams = UtmHandler.urlParametersWithoutDuplicates(urlParams)
        const separator = baseUrl.includes('?') ? '&' : '?'
  
        return `${baseUrl}${separator}${finalParams.toString()}`
      }
  
      static urlWithoutParams(url) {
        return url.split('?')[0]
      }
  
      static paramsFromUrl(url) {
        if (!url) return new URLSearchParams()
        const searchParams =
          url instanceof URL ? url.searchParams : new URLSearchParams(url)
        return searchParams
      }
  
      static urlParametersWithoutDuplicates(params) {
        const keys = Array.from(params.keys())
        const uniqueParams = new Map()
  
        keys.forEach((key) => {
          const values = params.getAll(key)
          uniqueParams.set(key, values[values.length - 1]) // Mantém apenas o último valor
        })
  
        const finalParams = new URLSearchParams()
        uniqueParams.forEach((value, key) => {
          finalParams.append(key, value)
        })
  
        return finalParams
      }
  
      static getUtmParameters() {
        const urlSearchParams = new URLSearchParams(window.location.search)
  
        // Função para obter valor de um parâmetro UTM, primeiro do localStorage e depois da URL
        function getParamValue(paramName) {
          const urlValue = urlSearchParams.get(paramName)
          if (
            urlValue &&
            urlValue !== 'null' &&
            urlValue !== 'undefined' &&
            urlValue !== ''
          ) {
            return urlValue
          }
  
          const localStorageValue = localStorage.getItem(paramName)
          if (!localStorageValue) return ''
  
          const expirationKey = localStorageExpirationKey(paramName)
          const expirationDate = localStorage.getItem(expirationKey)
  
          // Limpa se a data de expiração não existir ou for anterior à data atual
          if (!expirationDate || new Date(expirationDate) < new Date()) {
            localStorage.removeItem(paramName)
            localStorage.removeItem(expirationKey)
            return ''
          }
  
          return localStorageValue
        }
  
        // Concatena os valores relevantes dos parâmetros UTM
        const utmSource = getParamValue('utm_source')
        const utmCampaign = getParamValue('utm_campaign')
        const utmMedium = getParamValue('utm_medium')
        const utmContent = getParamValue('utm_content')
        const utmTerm = getParamValue('utm_term')
  
        // Manipula o código exclusivo para cada lead, se existir
        const uniqueCode = (function (source) {
          const leadInfo = JSON.parse(localStorage.getItem('lead'))
          if (!leadInfo) return source
          const leadId = leadInfo?._id
          return leadId
            ? source.includes('jLj')
              ? source
              : `${source}jLj${leadId}`
            : source
        })(utmSource)
  
        const params = new URLSearchParams()
        params.set('utm_source', uniqueCode)
        params.set(
          'utm_campaign',
          utmCampaign.includes('rKm-km-rKm')
            ? utmCampaign
            : `${utmCampaign}rKm-km-rKm${utmMedium}`,
        )
        params.set('utm_medium', utmMedium)
        params.set('utm_content', utmContent)
        params.set('utm_term', utmTerm)
  
        return params
      }
    }
  
    // Lista de parâmetros e tempo de expiração em dias
    window.paramsList = [
      'utm_source',
      'utm_campaign',
      'utm_medium',
      'utm_content',
      'utm_term',
      'xcod',
      'src',
    ]
    window.itemExpInDays = 7
  
    const essentialParams = [
      'utm_source',
      'utm_campaign',
      'utm_medium',
      'utm_content',
      'xcod',
      'sck',
    ]
  
    // Função auxiliar para gerar a chave de expiração no localStorage
    function localStorageExpirationKey(paramName) {
      return `${paramName}_exp`
    }
  
    // Função para adicionar parâmetros UTM a URLs de links e formulários
    function addUtmParametersToLinksAndForms(checkEssentials = true) {
      document.querySelectorAll('a').forEach((anchor) => {
        if (
          !anchor.href.startsWith('mailto:') &&
          !anchor.href.startsWith('tel:') &&
          !anchor.href.startsWith('whatsapp:') &&
          !anchor.href.includes('#')
        ) {
          if (
            checkEssentials &&
            essentialParams.every((param) => anchor.href.includes(param))
          )
            return
          anchor.href = UtmHandler.addUtmParametersToUrl(anchor.href)
        }
      })
  
      document.querySelectorAll('form').forEach((form) => {
        if (
          checkEssentials &&
          essentialParams.every((param) => form.action.includes(param))
        )
          return
        form.action = UtmHandler.addUtmParametersToUrl(form.action)
  
        // Define os valores dos parâmetros UTM nos campos de formulário
        UtmHandler.getUtmParameters().forEach((value, key) => {
          const input = form.querySelector(`input[name="${key}"]`)
          if (input) input.setAttribute('value', value)
          else {
            const newInput = document.createElement('input')
            newInput.type = 'hidden'
            newInput.name = key
            newInput.value = value
            form.appendChild(newInput)
          }
        })
      })
    }
  
    // Configura os parâmetros UTM imediatamente após a carga da página
    ;(() => {
      const urlParams = new URLSearchParams(window.location.search)
      window.paramsList.forEach((param) => {
        const paramValue = urlParams.get(param)
        if (paramValue) {
          localStorage.setItem(param, paramValue)
  
          // Define a expiração no localStorage
          const expirationDate = new Date(
            new Date().getTime() + 24 * window.itemExpInDays * 60 * 60 * 1000,
          )
          localStorage.setItem(
            localStorageExpirationKey(param),
            expirationDate.toISOString(),
          )
        }
      })
    })()
  
    // Função para verificar e configurar o código de segurança e origem
    const checkSecurityCodeAndSource = () => {
      const { body } = document
  
      // Verifica o tema da loja para condições específicas
      const isDropmeta = document?.BOOMR?.themeName?.includes('Dropmeta')
      const isWarehouse = document?.BOOMR?.themeName?.includes('Warehouse')
      const isClassic = document?.BOOMR?.themeName?.includes('Classic®')
      const isVisionNichada = document?.BOOMR?.themeName?.includes(
        'Tema Vision Nichada',
      )
      const isWaresabino = document?.BOOMR?.themeName?.includes('Waresabino')
  
      if (
        isDropmeta ||
        isWarehouse ||
        isClassic ||
        isVisionNichada ||
        isWaresabino
      ) {
        return true
      }
      return false
    }
  
    // Chama a função de adicionar parâmetros UTM a links e formulários
    addUtmParametersToLinksAndForms()
  
    // Escuta as mutações no DOM para atualizar dinamicamente os links e formulários
    ;(() => {
      const observer = new MutationObserver((mutationsList) => {
        const checkEssentials = mutationsList.some((mutation) => {
          return Array.from(mutation.addedNodes).some((node) => {
            if (node.nodeType !== Node.ELEMENT_NODE) return false
            return node.tagName === 'INPUT' && node.type === 'hidden'
          })
        })
  
        if (!checkEssentials) {
          addUtmParametersToLinksAndForms(true)
        }
      })
  
      // eslint-disable-next-line no-undef
      // observer.observe(body, { subtree: true, childList: true })
    })()
  
    // // Aplica a adição de parâmetros UTM a iframes após a carga completa da página
    // document.querySelectorAll("iframe").forEach((iframe) => {
    //   iframe.src = UtmHandler.addUtmParametersToUrl(iframe.src);
    // });
  
    // Executa funções adicionais após a carga completa da página
    function afterPageLoad() {
      addUtmParametersToLinksAndForms()
      setTimeout(addUtmParametersToLinksAndForms, 2000)
      setTimeout(addUtmParametersToLinksAndForms, 3000)
      setTimeout(addUtmParametersToLinksAndForms, 5000)
      setTimeout(addUtmParametersToLinksAndForms, 9000)
    }
  
    if (document.readyState === 'complete') {
      afterPageLoad()
    } else {
      window.addEventListener('load', afterPageLoad)
    }
  })()
  