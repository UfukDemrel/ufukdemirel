import "../components/Social.css";
import github from '../images/github.png';
import gmail from '../images/gmail.png';
import linkedlin from '../images/linkedlin.png';
import medium from '../images/medium.png';
import twitter from '../images/twitter.png';
import udemy from '../images/udemy.png';
import youtubelogo from '../images/youtube-logo.png';
import youtube from '../images/youtube.png';

const Social = () => {

  return (
    <div className="">
      <div className='user-bio-div'>
        <div className='user-bio-p'>Social</div>
      </div>

      <div class="grid-container">
        {/* <a href='https://www.instagram.com/ufukdemrel/' target='_blank' rel="noreferrer">
          <div className="grid-item color1">
            <img alt='alt' src={instagram} />
            <p className='title'>Instagram</p>
            <p className='text'>@ufukdemrel</p>
            <button type='submit' className='instagram'>Follow</button>
          </div>
        </a> */}

        <a href='https://twitter.com/FrontJockey' target='_blank' rel="noreferrer">
          <div className="grid-item color2">
            <img alt='alt' src={twitter} />
            <p className='title'>Twitter</p>
            <p className='text'>@frontjockey</p>
            <button type='submit' className='twitter'>Follow</button>
          </div>
        </a>

        <a href='https://www.linkedin.com/in/ufuk-demirel-3136b6183/' target='_blank' rel="noreferrer">
          <div className="grid-item color3">
            <img alt='alt' src={linkedlin} />
            <p className='title'>Linkedln</p>
            <p className='text'>@ufukdemrel</p>
            <button type='submit' className='linkedlin'>Follow</button>
          </div>
        </a>

        <a href='https://github.com/UfukDemrel' target='_blank' rel="noreferrer">
          <div className="grid-item">
            <img alt='alt' src={github} />
            <p className='title'>Github</p>
            <p className='text'>@ufukdemrel</p>
            <button type='submit' className='github'>Follow</button>
          </div>
        </a>

        {/* <a href='https://bionluk.com/ufukdemrel' target='_blank' rel="noreferrer">
          <div className="grid-item color5">
            <img src={bionluk} alt="top logo" />
            <p className='title'>ufukdemrel</p>
            <p className='text'>@ufukdemrel</p>
            <button type='submit' className='bionluk'>Follow</button>
          </div>
        </a> */}

        <a href='https://www.udemy.com/course/uygulama-ve-odevlerle-mssql-egitimi-part-2/learn/lecture/25323008#overview' target='_blank' rel="noreferrer">
          <div className="grid-item color6">
            <img src={udemy} alt="top logo" />
            <p className='title'>Udemy</p>
            <p className='text'>@ufukdemrel</p>
            <button type='submit' className='udemy'>Follow</button>
          </div>
        </a>

        <a href='https://mail.google.com/mail/u/0/?pli=1#inbox' target='_blank' rel="noreferrer">
          <div class="grid-item color7">
            <img src={gmail} alt="top logo" />
            <p className='title'>Gmail</p>
            <p className='text'>@udemirel</p>
            <button type='submit' className='gmail'>Mail</button>
          </div>
        </a>

        <a target="_blank" href="https://medium.com/@udemirel012">
          <div className="grid-item color8">
            <img src={medium} alt="top logo" />
            <p className="title">Medium</p>
            <p className="text">@udemirel012</p>
            <button className="medium" type="button">Read More</button>
          </div>
        </a>

        <a href="https://www.pexels.com/tr-tr/@ufuk-demirel-685205934/" target='_blank' rel="noreferrer">
          <div className="grid-item color9">
            <img src="https://c.clc2l.com/t/-/2/-2kd96A.png" alt="top logo" />
            <p className='title'>Pexels</p>
            <p className='text'>@ufukdemirel</p>
            <button type='submit' className='pexel'>See</button>
          </div>
        </a>

        <a href="https://www.instagram.com/wanderscenic/" target='_blank' rel="noreferrer">
          <div className="grid-item padding">
            <img className="sea" src='sea.gif' alt="top logo" />
          </div>
        </a>
      </div>

      <div className="two-grid">
        <a href="https://www.youtube.com/watch?v=eiyMQP9-10s&t=22s" target='_blank' rel="noreferrer">
          <div className='one-grid'>
            <img alt='alt' className="youtubelogo" src={youtubelogo} />
            <p className='y-title'>Infinite Scroll On Collection Page Without App | Shopify</p>
            <p className='y-text'>youtube.com</p>
            <img className="youtube" alt='alt' src={youtube} />
          </div>
        </a>

        <a href="https://www.youtube.com/watch?v=V4rQ4QuhzVs&t=10s" target='_blank' rel="noreferrer">
          <div className='one-grid space'>
            <img alt='alt' className="youtubelogo" src={youtubelogo} />
            <p className='y-title'>Infinite Scroll on Collection Page that Can be Called Across the Entire Project Without an App</p>
            <p className='y-text'>youtube.com</p>
            <img className="youtube" alt='alt' src='page.png' />
          </div>
        </a>

        <a href="https://youtu.be/O2UzkR5Msrw" target='_blank' rel="noreferrer">
          <div className='one-grid space'>
            <img alt='alt' className="youtubelogo" src={youtubelogo} />
            <p className='y-title'>How to make React projects live with Github and Vercel?</p>
            <p className='y-text'>youtube.com</p>
            <img className="youtube" alt='alt' src='red.png' />
          </div>
        </a>

        <a href="https://www.youtube.com/playlist?list=PLgENWnfcPjeaFOMl44BxgKqNFRX3gXtq0" target='_blank' rel="noreferrer">
          <div className='one-grid'>
            <img alt='alt' className="youtubelogo" src={youtubelogo} />
            <p className='y-title'>Follow our Next.Js course and let's improve together!</p>
            <p className='y-text'>youtube.com</p>
            <img src='nextjs.jpg' className="youtube" alt='alt' />
          </div>
        </a>

        <a href="https://www.youtube.com/watch?v=CRt1E2V1tdo" target='_blank' rel="noreferrer">
          <div className='one-grid space'>
            <img alt='alt' className="youtubelogo" src={youtubelogo} />
            <p className='y-title'>Follow our React.Js course and let's improve together!</p>
            <p className='y-text'>youtube.com</p>
            <img src='react2.png' className="youtube" alt='alt' />
          </div>
        </a>

        <a href="https://www.youtube.com/watch?v=CRt1E2V1tdo" target='_blank' rel="noreferrer">
          <div className='one-grid space'>
            <img alt='alt' className="youtubelogo" src={youtubelogo} />
            <p className='y-title'>Let's learn Javascript together!</p>
            <p className='y-text'>youtube.com</p>
            <img src='javascript.png' className="youtube" alt='alt' />
          </div>
        </a>

        <a href="https://www.youtube.com/watch?v=n8IDqeaPi8U" target='_blank' rel="noreferrer">
          <div className='one-grid'>
            <img alt='alt' className="youtubelogo" src={youtubelogo} />
            <p className='y-title'>CodeEditor Clone Website - (Next.Js, React, TailwindCSS)</p>
            <p className='y-text'>youtube.com</p>
            <img src='clone.jpg' className="youtube" alt='alt' />
          </div>
        </a>

        <a href="https://www.youtube.com/watch?v=n8IDqeaPi8U" target='_blank' rel="noreferrer">
          <div className='one-grid space'>
            <img alt='alt' className="youtubelogo" src={youtubelogo} />
            <p className='y-title'>Porfolio Website Creation - (Next.Js, React, TailwindCSS)</p>
            <p className='y-text'>youtube.com</p>
            <img src='portfolio.png' className="youtube" alt='alt' />
          </div>
        </a>

        <a href="https://youtu.be/UFYxyPURKsU" target='_blank' rel="noreferrer">
          <div className='one-grid space'>
            <img alt='alt' className="youtubelogo" src={youtubelogo} />
            <p className='y-title'>Dropzone Mail Website (Node.Js, Express, React)</p>
            <p className='y-text'>youtube.com</p>
            <img src='zone.png' className="youtube" alt='alt' />
          </div>
        </a>

        <a href="https://youtu.be/UFYxyPURKsU" target='_blank' rel="noreferrer">
          <div className='one-grid'>
            <img alt='alt' className="youtubelogo" src={youtubelogo} />
            <p className='y-title'>React, Next.JS ile Translate Çeviri Websitesi</p>
            <p className='y-text'>youtube.com</p>
            <img src='mellow.png' className="youtube" alt='alt' />
          </div>
        </a>

        <a href="https://youtu.be/UFYxyPURKsU" target='_blank' rel="noreferrer">
          <div className='one-grid space'>
            <img alt='alt' className="youtubelogo" src={youtubelogo} />
            <p className='y-title'>Show Color Variations on a Shopify Product Page</p>
            <p className='y-text'>youtube.com</p>
            <img src='color.png' className="youtube" alt='alt' />
          </div>
        </a>

      </div>

    </div>
  );
};

export default Social;
