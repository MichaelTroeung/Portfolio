 const engineerWord = document.getElementById('engineer-word');
    const word = '<engineer>';
    let index = 0;
    let deleting = false;
    let chars = [];

    if (engineerWord) {
      engineerWord.innerHTML = '';
      chars = Array.from(word).map((char) => {
        const span = document.createElement('span');
        span.className = 'engineer-char';
        span.textContent = char;
        engineerWord.appendChild(span);
        return span;
      });
    }

    const typeLoop = () => {
      if (!chars.length) return;

      if (!deleting) {
        chars[index].style.opacity = '1';
        index += 1;
        if (index === chars.length) {
          deleting = true;
          setTimeout(typeLoop, 900);
          return;
        }
      } else {


        console.log(String(index));

        const wordLength = word.length;
        if(index > 1 & index < wordLength){
        chars[index - 1].style.opacity = '0';
        }
        
        
        index -= 1;
        if (index === 0) {
          deleting = false;
          setTimeout(typeLoop, 300);
          return;
        }
      }

      const delay = deleting ? 90 : 120;
      setTimeout(typeLoop, delay);
    };

    typeLoop();