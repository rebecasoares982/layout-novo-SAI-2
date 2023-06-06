
//according to loftblog tut
$('.nav li:first').addClass('active');

var showSection = function showSection(section, isAnimate) {
  var
    direction = section.replace(/#/, ''),
    reqSection = $('.section').filter('[data-section="' + direction + '"]'),
    reqSectionPos = reqSection.offset().top - 0;

  if (isAnimate) {
    $('body, html').animate({
      scrollTop: reqSectionPos
    },
      800);
  } else {
    $('body, html').scrollTop(reqSectionPos);
  }

};

var checkSection = function checkSection() {
  $('.section').each(function () {
    var
      $this = $(this),
      topEdge = $this.offset().top - 80,
      bottomEdge = topEdge + $this.height(),
      wScroll = $(window).scrollTop();
    if (topEdge < wScroll && bottomEdge > wScroll) {
      var
        currentId = $this.data('section'),
        reqLink = $('a').filter('[href*=\\#' + currentId + ']');
      reqLink.closest('li').addClass('active').
        siblings().removeClass('active');
    }
  });
};

$('.main-menu, .responsive-menu, .scroll-to-section').on('click', 'a', function (e) {
  e.preventDefault();
  showSection($(this).attr('href'), true);
});

$(window).scroll(function () {
  checkSection();
});


//Acessibilidade
const accessibilityButton = document.getElementById('accessibility-button');
accessibilityButton.addEventListener('click', toggleAccessibilityMenu);

function toggleAccessibilityMenu() {
  const accessibilityMenuContent = document.querySelector('.accessibility-menu-content');
  if (!accessibilityMenuContent.classList.contains('show')) {
    accessibilityMenuContent.classList.add('show');
  } else {
    accessibilityMenuContent.classList.remove('show');
  }
}

accessibilityButton.addEventListener('mouseover', function () {
  const accessibilityButtonText = document.getElementById('accessibility-button-text');
  accessibilityButtonText.classList.add('show');
});



// Botão voltar para o topo
const backButton = document.querySelector('.back-to-top');

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function updateBackToTopVisibility() {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  if (scrollPosition > windowHeight / 2) {
    backButton.style.display = 'block';
  } else {
    backButton.style.display = 'none';
  }

  if (scrollPosition + windowHeight >= documentHeight) {
    backButton.classList.add('at-bottom');
  } else {
    backButton.classList.remove('at-bottom');
  }
}

backButton.addEventListener('click', scrollToTop);
window.addEventListener('scroll', updateBackToTopVisibility);

backButton.style.display = 'none';



//Toggle de reações
function toggleReactions() {
  const reactionsPanel = document.querySelector('.painel-reacoes');
  reactionsPanel.classList.toggle('show');

  if (reactionsPanel.classList.contains('show')) {
    reactionsPanel.style.display = 'block';
  } else {
    reactionsPanel.style.display = 'none';
  }
}

function react(reaction) {
  // Aqui você pode implementar a lógica para enviar a reação selecionada para o servidor ou realizar outras ações necessárias
  console.log(`Reação selecionada: ${reaction}`);
}
