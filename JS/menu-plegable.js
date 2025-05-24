document.addEventListener("DOMContentLoaded", () => {
  // Función para crear submenús plegables
  function setupCollapsibleMenus() {
    // Seleccionar todos los elementos de primer nivel en el sidebar
    const menuItems = document.querySelectorAll(".sidebar > ul > li")

    // Identificar elementos que tienen subelementos (por su ID)
    menuItems.forEach((item) => {
      const targetId = item.dataset.target
      if (targetId) {
        // Verificar si este elemento tiene subelementos
        const subItems = Array.from(menuItems).filter((subItem) => {
          const subTargetId = subItem.dataset.target
          return subTargetId && subTargetId.startsWith(targetId + ".") && subTargetId !== targetId
        })

        if (subItems.length > 0) {
          // Crear un submenú
          const subMenu = document.createElement("ul")
          subMenu.className = "submenu"

          // Mover los subelementos al submenú
          subItems.forEach((subItem) => {
            subMenu.appendChild(subItem.cloneNode(true))
            // Opcional: ocultar los originales
            subItem.style.display = "none"
          })

          // Agregar el submenú al elemento padre
          item.appendChild(subMenu)

          // Agregar evento de clic para expandir/colapsar
          item.addEventListener("click", function (e) {
            // Solo activar si se hace clic en el elemento principal, no en sus hijos
            if (e.target === item || e.target === item.firstChild) {
              this.classList.toggle("active")
              e.stopPropagation()
            }
          })
        }
      }
    })

    // Evento para mostrar el panel correspondiente
    document.querySelectorAll(".sidebar li").forEach((item) => {
      item.addEventListener("click", function (e) {
        const targetId = this.dataset.target
        if (targetId) {
          // Ocultar todos los paneles
          document.querySelectorAll(".panel").forEach((panel) => {
            panel.classList.remove("active")
          })

          // Mostrar el panel seleccionado
          const targetPanel = document.getElementById(targetId)
          if (targetPanel) {
            targetPanel.classList.add("active")
          }

          // Marcar como activo solo este elemento
          document.querySelectorAll(".sidebar li").forEach((li) => {
            if (li !== this && !li.contains(this) && !this.contains(li)) {
              li.classList.remove("active")
            }
          })

          this.classList.add("active")
          e.stopPropagation()
        }
      })
    })
  }

  // Inicializar los menús plegables
  setupCollapsibleMenus()
})
