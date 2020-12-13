const express = require('express');
const axios   = require('axios');
const fs      = require('fs');
const app     = express();
const port    = process.env.PORT || 80 || 8080 || 3333 || 3000;

// let userName = "filipedeschamps";
// Amei te ver

app.use(express.static('files'));

app.get('/', (req, res) => {
  function getName() {
    // const host = document.location.host;
    const nameUser = document.querySelector('input').value;
    // const link = `http://${host}/${nameUser}`;
    if(nameUser == '') return alert('Campo de nome está vazio!')

    document.location.href = nameUser;
    // document.location.href = link;
  }

  const input = `
  <script data-ad-client="ca-pub-5593915309329672" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  
  <from>
    <input type="text" name="name" id="name" required placeholder="Digite um login do GitHub!"/>
    <input onclick="getName()" type="submit" value="BUSCAR">
  </from>
  <script>
    document.addEventListener('keydown', e => {
      if(e.key.toLocaleLowerCase() == 'enter') {
        getName();
      }
    });
  </script>
  <script>${getName}</script>`
   res.send(input);
  // res.send('Essa página aida está em manuntenção!<br><br><a href="/sozinhol">Clique aqui para ai para uma de exemplo!</a><br><br>Depois mude "sozinhol" por algum perfil do GitHub!')
});

app.get('/kety', (req, res) => {
  res.send(`<!DOCTYPE html>
                <html lang="pt">
                <head>
                  <script data-ad-client="ca-pub-5593915309329672" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>Kettelyn</title>
                  <link rel="shortcut icon" href="https://pps.whatsapp.net/v/t61.24694-24/129559646_3604515019597777_6562232797452939130_n.jpg?oh=69827610f7332b783a6d180b929ff816&oe=5FD9C408&t=s&u=556391187026@c.us&i=1607805286&n=Kfn8q5Qkm9wXI0lXQKJyEHZRt/xfmoJBlD41RrEavy8=" type="image/x-icon">
                  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
                  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
                  <style>
                    body {
                      background: rgb(70, 142, 236);
                      font: normal 15pt Arial;
                    }
                
                    header {
                      color: white;
                      text-align: center;
                    }
                
                    section {
                      display: flex;
                      gap: 30px;
                      flex-direction: inherit;
                      background: white;
                      border-radius: 10px;
                      padding: 15px;
                      width: 750px;
                      margin: auto;
                      box-shadow: 5px 5px 10px rgb(0 0 0);
                    }

                    section div.img a img {
                      min-width: 400px;
                      min-height: 400px;
                      width: 400px;
                      height: 400px;
                      max-width: 400px;
                      max-height: 400px;
                    }

                    section div.main {
                      background: rgba(0,0,0,0.2);
                      padding: 20px;
                      border-radius: 10px;
                    }
                
                    footer {
                      color: white;
                      text-align: center;
                      font-style: italic;
                    }
                  </style>
                </head>
                <body>
                  <header>
                    <h1>Olá eu sou Kettelyn Amanda</h1>
                  </header>
                  <section>
                    <div class="img">
                      <a spellcheck="false" href="https://pps.whatsapp.net/v/t61.24694-24/129559646_3604515019597777_6562232797452939130_n.jpg?oh=69827610f7332b783a6d180b929ff816&oe=5FD9C408&t=s&u=556391187026@c.us&i=1607805286&n=Kfn8q5Qkm9wXI0lXQKJyEHZRt/xfmoJBlD41RrEavy8=" rel="nofollow" target="_blank" dir="auto">
                        <img  style="border-radius: 50%;" src="https://pps.whatsapp.net/v/t61.24694-24/129559646_3604515019597777_6562232797452939130_n.jpg?oh=69827610f7332b783a6d180b929ff816&oe=5FD9C408&t=s&u=556391187026@c.us&i=1607805286&n=Kfn8q5Qkm9wXI0lXQKJyEHZRt/xfmoJBlD41RrEavy8="/>
                      </a>
                    </div>
                    <div class="main">
                      <p>Sou linda pra Karalho!</p>
                      <p>Não me quis antes não tem agora!</p>
                    </div>
                  </section>
                  <footer>
                    <p>&copy; <a spellcheck="false" href="https://github.com/sozinhoL" rel="nofollow" target="_blank" dir="auto">sozinhoL</a></p>
                  </footer>
                </body>
                </html>`);
});

app.get('/:username', async (req, res) => {
  const userName = await req.params.username;
  if(userName == "kety" || userName == "Kety") return;
  
  (async () => {
    // https://api.github.com/users/sozinhol
    await axios.get(`https://api.github.com/users/${userName}`).then(async e => {
      const dataUser = {
        name: await e.data.name,
        login: await e.data.login,
        profile: await e.data.html_url,
        linkBlog: await e.data.blog,
        twitterUserName: await e.data.twitter_username,
        avatarUrl: await e.data.avatar_url,
        location: await e.data.location,
        bio: await e.data.bio,
        urlApi: await e.data.url,
        id: await e.data.id,
      }
      let linkTwitter = ``;
      let linkBlog = ``;
      
      if(dataUser.twitterUserName){
        linkTwitter = `<a href="https://twitter.com/${dataUser.twitterUserName}">@${dataUser.twitterUserName}</a>`;
      } else {
        linkTwitter = `<span>Não encontrado!</span>`;
      }
      if(dataUser.linkBlog){
        linkBlog = `<a spellcheck="false" href="${dataUser.linkBlog}" rel="nofollow" target="_blank" dir="auto">${dataUser.linkBlog}</a>`;
      } else {
        linkBlog = `<span>Não encontrado!</span>`;
      }

      res.send(`<!DOCTYPE html>
                <html lang="pt">
                <head>
                  <script data-ad-client="ca-pub-5593915309329672" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                  <meta charset="UTF-8">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>${dataUser.name} (${dataUser.login})</title>
                  <link rel="shortcut icon" href="${dataUser.avatarUrl}" type="image/x-icon">
                  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
                  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
                  <style>
                    body {
                      background: rgb(70, 142, 236);
                      font: normal 15pt Arial;
                    }
                
                    header {
                      color: white;
                      text-align: center;
                    }
                
                    section {
                      display: flex;
                      gap: 30px;
                      flex-direction: inherit;
                      background: white;
                      border-radius: 10px;
                      padding: 15px;
                      width: 750px;
                      margin: auto;
                      box-shadow: 5px 5px 10px rgb(0 0 0);
                    }

                    section div.img a img {
                      min-width: 400px;
                      min-height: 400px;
                      width: 400px;
                      height: 400px;
                      max-width: 400px;
                      max-height: 400px;
                    }

                    section div.main {
                      background: rgba(0,0,0,0.2);
                      padding: 20px;
                      border-radius: 10px;
                    }
                
                    footer {
                      color: white;
                      text-align: center;
                      font-style: italic;
                    }
                  </style>
                </head>
                <body>
                  <header>
                    <h1>Olá eu sou ${dataUser.name} (ID: ${dataUser.id})</h1>
                  </header>
                  <section>
                    <div class="img">
                      <a spellcheck="false" href="${dataUser.urlApi}" rel="nofollow" target="_blank" dir="auto">
                        <img  style="border-radius: 50%;" src="${dataUser.avatarUrl}"/>
                      </a>
                    </div>
                    <div class="main">
                      <p>Meu login é: "${dataUser.login}"</p>
                      <p>Twitter: ${linkTwitter}</p>
                      <p>Blog: ${linkBlog}</p>
                      <p>Perfil GitHub: <a spellcheck="false" href="${dataUser.profile}" rel="nofollow" target="_blank" dir="auto">${dataUser.profile}</a></p>
                      <p>Moro em/no ${dataUser.location}</p>
                      <p>Sobre mim: <span>${dataUser.bio}</span></p>
                    </div>
                  </section>
                  <footer>
                    <p>&copy; <a spellcheck="false" href="https://github.com/sozinhoL" rel="nofollow" target="_blank" dir="auto">sozinhoL</a></p>
                  </footer>
                </body>
                </html>`);
  }).catch(err => {
    let stack = err.stack;
    const faviconURL = './images/favicon.ico';
    stack = stack.replace('\n', '<p style="text-indent: 50px;">');

    res.send(`
      <link rel="shortcut icon" href="${faviconURL}" type="image/x-icon">
      <title>${userName} not found!</title>
      <style>
        p {
          margin-block-start: 0;
          margin-block-end: 0;
          margin-inline-start: 0;
          margin-inline-end: 0;
        }

        h1 {
          text-align: center;
          justify-content: center;
          align-items: center;
        }
      </style>
      <h1>${err.message}</h1>
      <p>${stack.replace(/\n/g, "</p><p  style='text-indent: 50px;'>")}</p>
    `);
  });
  })();
});

// text-indent: 50px;

// axios.get('http://localhost/')
//   .then(e => {
//     app.get('/res', (req, res) => {
//       res.send(e.date);
//     });
// });

app.listen(port, () => {
  console.log('port:',port);
})
