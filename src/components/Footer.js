import React from 'react'
import {
  FaTwitter,
  FaFacebookF,
  FaGithubSquare,
  FaInstagram,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer>
      <div className='social'>
        <div className='social-container'>
          <button>
            <a
              href='twitter'
              onClick={() =>
                window.open('https://twitter.com/?lang=en', '_blank')
              }
            >
              <FaTwitter />
            </a>
          </button>
          <button>
            <a
              href='facebook.com'
              onClick={() => window.open('https://www.facebook.com/', '_blank')}
            >
              <FaFacebookF />
            </a>
          </button>
          <button>
            <a
              href='github.com'
              onClick={() =>
                window.open(
                  'https://github.com/DoinaR?tab=repositories',
                  '_blank'
                )
              }
            >
              <FaGithubSquare />
            </a>
          </button>
          <button>
            <a
              href='instagram.com'
              onClick={() =>
                window.open('https://www.instagram.com/', '_blank')
              }
            >
              <FaInstagram />
            </a>
          </button>
        </div>
      </div>
    </footer>
  )
}
