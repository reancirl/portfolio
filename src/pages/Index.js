/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import MailchimpForm from '../components/MailChimpForm';

const meta = {
  title: 'Reancirl Balaba Dev Services',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className='relative overflow-hidden'>
          <div className='container px-4 mx-auto'>
            <div className='flex items-center justify-between pt-6 -m-2'>
              <div className='w-auto p-2'>
                <div className='flex flex-wrap items-center'>
                  <div className='w-auto'>
                    <a className='relative z-10 inline-block' href='#'>
                      {/* <img src='nightsable-assets/logos/logo.svg' alt='' /> */}
                      Reancirl Balaba
                    </a>
                  </div>
                </div>
              </div>
              <div className='w-auto p-2'>
                <div className='flex flex-wrap items-center'>
                  <div className='w-auto hidden lg:block'>
                    <ul className='flex items-center mr-12'>
                      <li className='mr-12 text-white font-medium hover:text-opacity-90 tracking-tighter'>
                        <a href='#'>Home</a>
                      </li>
                      <li className='mr-12 text-white font-medium hover:text-opacity-90 tracking-tighter'>
                        <a href='#'>About</a>
                      </li>
                      <li className='mr-12 text-white font-medium hover:text-opacity-90 tracking-tighter'>
                        <a href='#'>Feature</a>
                      </li>
                      <li className='text-white font-medium hover:text-opacity-90 tracking-tighter'>
                        <a href='#'>Blog</a>
                      </li>
                    </ul>
                  </div>
                  <div className='w-auto hidden lg:block'>
                    <div className='inline-block'>
                      <a
                        className='inline-block px-8 py-4 text-white hover:text-black tracking-tighter hover:bg-green-400 border-2 border-white focus:border-green-400 focus:border-opacity-40 hover:border-green-400 focus:ring-4 focus:ring-green-400 focus:ring-opacity-40 rounded-full transition duration-300'
                        href='https://calendly.com/reancirl/dev-services'
                      >
                        Get in touch
                      </a>
                    </div>
                  </div>
                  <div className='w-auto lg:hidden'>
                    <a className='relative z-10 inline-block' href='#'>
                      <svg
                        className='navbar-burger text-green-500'
                        width={51}
                        height={51}
                        viewBox='0 0 56 56'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect
                          width={56}
                          height={56}
                          rx={28}
                          fill='currentColor'
                        />
                        <path
                          d='M37 32H19M37 24H19'
                          stroke='black'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50'>
            <div className='navbar-backdrop fixed inset-0 bg-gray-800 opacity-80' />
            <nav className='relative z-10 px-9 pt-8 h-full overflow-y-auto'>
              <div className='flex flex-wrap justify-between h-full'>
                <div className='w-full'>
                  <div className='flex items-center justify-between -m-2'>
                    <div className='w-auto p-2'>
                      <a className='inline-block' href='#'>
                        {/* <img src='nightsable-assets/logos/logo.svg' alt='' /> */}
                        Reancirl Balaba
                      </a>
                    </div>
                    <div className='w-auto p-2'>
                      <a
                        className='navbar-burger inline-block text-white'
                        href='#'
                      >
                        <svg
                          width={24}
                          height={24}
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M6 18L18 6M6 6L18 18'
                            stroke='currentColor'
                            strokeWidth={2}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col justify-center py-16 w-full'>
                  <ul>
                    <li className='mb-8 text-white font-medium hover:text-opacity-90 tracking-tighter'>
                      <a href='#'>Home</a>
                    </li>
                    <li className='mb-8 text-white font-medium hover:text-opacity-90 tracking-tighter'>
                      <a href='#'>About</a>
                    </li>
                    <li className='mb-8 text-white font-medium hover:text-opacity-90 tracking-tighter'>
                      <a href='#'>Feature</a>
                    </li>
                    <li className='text-white font-medium hover:text-opacity-90 tracking-tighter'>
                      <a href='#'>Blog</a>
                    </li>
                  </ul>
                </div>
                <div className='flex flex-col justify-end w-full pb-8'>
                  <a
                    className='inline-block px-8 py-4 text-center text-white hover:text-black tracking-tighter hover:bg-green-400 border-2 border-white focus:border-green-400 focus:border-opacity-40 hover:border-green-400 focus:ring-4 focus:ring-green-400 focus:ring-opacity-40 rounded-full transition duration-300'
                    href='#'
                  >
                    Get in touch
                  </a>
                </div>
              </div>
            </nav>
          </div>
          <div className='relative pt-20 lg:pt-28'>
            <div className='relative z-10 container px-4 mx-auto'>
              <div className='relative mb-24 text-center md:max-w-4xl mx-auto'>
                <img
                  className='absolute top-44 -left-36'
                  src='nightsable-assets/images/headers/star2.svg'
                  alt=''
                />
                <img
                  className='absolute top-10 -right-36'
                  src='nightsable-assets/images/headers/star2.svg'
                  alt=''
                />
                <span className='inline-block mb-2.5 text-sm text-green-400 font-medium tracking-tighter'>
                  Revolutionizing Development
                </span>
                <h1 className='text-7xl lg:text-8xl xl:text-10xl text-white tracking-tighter'>
                  Tailored Subscriptions, Unlimited Flexibility.
                </h1>
                <h2 className='mb-10 text-3xl lg:text-2xl xl:text-5xl text-white tracking-tighter'>
                  Pause or cancel anytime
                </h2>
                <a
                  className='inline-block px-8 py-4 tracking-tighter bg-green-400 hover:bg-green-500 text-black focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 rounded-full transition duration-300'
                  href='#pricing'
                >
                  Start now
                </a>
              </div>
              <div className='relative max-w-max mx-auto'>
                <img
                  className='absolute top-7 -right-64'
                  src='nightsable-assets/images/headers/star.svg'
                  alt=''
                />
              </div>
            </div>
          </div>
          <img
            className='absolute top-0 left-48'
            src='nightsable-assets/images/headers/layer-blur.svg'
            alt=''
          />
          <img
            className='absolute bottom-0 right-0'
            src='nightsable-assets/images/headers/lines2.svg'
            alt=''
          />
        </section>
        <section className='pt-20 pb-24 md:pb-28 overflow-hidden'>
          <div className='container px-4 mx-auto'>
            <div className='flex flex-wrap -m-8'>
              <div className='w-full md:w-1/2 p-8'>
                <div className='md:max-w-md'>
                  <span className='inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter'>
                    Check our stats
                  </span>
                  <h1 className='text-6xl md:text-7xl text-white tracking-tighter-xl'>
                    We focus on our expertise
                  </h1>
                </div>
              </div>
              <div className='w-full md:w-1/2 p-8'>
                <h3 className='mb-8 text-2xl text-white tracking-tighter'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </h3>
                <p className='mb-10 text-lg text-gray-300'>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </p>
                <a
                  className='inline-block px-8 py-4 text-white hover:text-black tracking-tighter hover:bg-green-400 border-2 border-white focus:border-green-400 focus:border-opacity-40 hover:border-green-400 focus:ring-4 focus:ring-green-400 focus:ring-opacity-40 rounded-full transition duration-300'
                  href='#'
                >
                  Read more
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className='relative py-24 overflow-hidden'>
          <div className='container px-4 mx-auto'>
            <div className='mb-20 md:max-w-xl text-center mx-auto'>
              <span className='inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter'>
                Revolutionizing Development
              </span>
              <h2 className='text-7xl lg:text-8xl text-white tracking-tighter-xl'>
                Features
              </h2>
            </div>
            <div className='relative mb-10 py-20 px-16 bg-gradient-radial-dark overflow-hidden border border-gray-900 border-opacity-30 rounded-5xl'>
              <div className='max-w-6xl mx-auto'>
                <div className='relative z-10 flex flex-wrap items-center -m-8'>
                  <div className='w-full md:w-1/2 p-8'>
                    <div className='max-w-md mx-auto text-center'>
                      <h2 className='mb-6 text-7xl text-white tracking-tighter-xl'>
                        We focus on our expertise
                      </h2>
                      <p className='text-white text-opacity-60'>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum i
                      </p>
                    </div>
                  </div>
                  <div className='w-full md:w-1/2 p-8'>
                    <img
                      className='mx-auto md:mr-0'
                      src='nightsable-assets/images/features/dashboard.png'
                      alt=''
                    />
                  </div>
                </div>
              </div>
              <img
                className='absolute bottom-0 left-0'
                src='nightsable-assets/images/features/bg-gray.png'
                alt=''
              />
            </div>
            <div className='flex flex-wrap -m-5'>
              <div className='w-full md:w-1/2 p-5'>
                <div className='relative px-16 pt-14 pb-16 h-full bg-gradient-radial-dark overflow-hidden border border-gray-900 border-opacity-30 rounded-5xl'>
                  <img
                    className='mb-14'
                    src='nightsable-assets/images/features/cards.png'
                    alt=''
                  />
                  <div className='relative z-10 max-w-sm text-center mx-auto'>
                    <h2 className='mb-6 text-7xl text-white tracking-tighter'>
                      We focus on our expertise
                    </h2>
                    <p className='text-white text-opacity-60'>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum i
                    </p>
                  </div>
                  <img
                    className='absolute bottom-0 right-0'
                    src='nightsable-assets/images/features/bg-gray-2.png'
                    alt=''
                  />
                </div>
              </div>
              <div className='w-full md:w-1/2 p-5'>
                <div className='relative px-16 pt-14 pb-16 h-full bg-gradient-radial-dark overflow-hidden border border-gray-900 border-opacity-30 rounded-5xl'>
                  <div className='mb-14 max-w-sm mx-auto'>
                    <div className='flex flex-wrap justify-center'>
                      <div className='w-auto p-2'>
                        <div className='flex items-center justify-center w-24 h-24 bg-gradient-radial-dark border border-gray-900 border-opacity-30 rounded-5xl'>
                          <img
                            src='nightsable-assets/logos/brands/figma.svg'
                            alt=''
                          />
                        </div>
                      </div>
                      <div className='w-auto p-2'>
                        <div className='flex items-center justify-center w-24 h-24 bg-gradient-radial-dark border border-gray-900 border-opacity-30 rounded-5xl'>
                          <img
                            src='nightsable-assets/logos/brands/notion.svg'
                            alt=''
                          />
                        </div>
                      </div>
                      <div className='w-auto p-2'>
                        <div className='flex items-center justify-center w-24 h-24 bg-gradient-radial-dark border border-gray-900 border-opacity-30 rounded-5xl'>
                          <img
                            src='nightsable-assets/logos/brands/slack.svg'
                            alt=''
                          />
                        </div>
                      </div>
                      <div className='w-auto p-2'>
                        <div className='flex items-center justify-center w-24 h-24 bg-gradient-radial-dark border border-gray-900 border-opacity-30 rounded-5xl'>
                          <img
                            src='nightsable-assets/logos/brands/spotify.svg'
                            alt=''
                          />
                        </div>
                      </div>
                      <div className='w-auto p-2'>
                        <div className='flex items-center justify-center w-24 h-24 bg-gradient-radial-dark border border-gray-900 border-opacity-30 rounded-5xl'>
                          <img
                            src='nightsable-assets/logos/brands/twitter.svg'
                            alt=''
                          />
                        </div>
                      </div>
                      <div className='w-auto p-2'>
                        <div className='flex items-center justify-center w-24 h-24 bg-gradient-radial-dark border border-gray-900 border-opacity-30 rounded-5xl'>
                          <img
                            src='nightsable-assets/logos/brands/desktop.svg'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='relative z-10 max-w-sm text-center mx-auto'>
                    <h2 className='mb-6 text-7xl text-white tracking-tighter'>
                      We focus on our expertise
                    </h2>
                    <p className='text-white text-opacity-60'>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum i
                    </p>
                  </div>
                  <img
                    className='absolute bottom-0 right-0'
                    src='nightsable-assets/images/features/bg-gray-2.png'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-24 overflow-hidden' id='pricing'>
          <div className='container px-4 mx-auto'>
            <div className='mb-20 md:max-w-2xl text-center mx-auto'>
              <span className='inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter'>
                Revolutionizing Development
              </span>
              <h2 className='mb-8 text-7xl lg:text-8xl text-white tracking-7xl lg:tracking-8xl'>
                Compare our plans
              </h2>
              <p className='mb-12 text-gray-300 max-w-sm mx-auto'>
                Nightsable is a strategic branding agency focused on brand
                creation, rebrands, and brand
              </p>
            </div>
            <div className='flex flex-wrap -m-4'>
              <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
                <div className='relative px-8 pt-12 pb-12 h-full bg-gradient-radial-dark border-2 border-gray-900 border-opacity-30 overflow-hidden rounded-5xl'>
                  <p className='mb-2 text-lg text-white font-light'>Basic</p>
                  <p className='mb-6 text-gray-300'>
                    During this phase the design is developed to meet the
                    required technical standards to
                  </p>
                  <p className='mb-4 text-white font-medium text-5xl'>
                    <span>$800</span>
                    <span className='text-base font-medium text-gray-300'>
                      / month
                    </span>
                  </p>
                  <p className='mb-6 text-xs text-gray-300 font-light uppercase'>
                    What's includes
                  </p>
                  <ul className='mb-10'>
                    <li className='flex items-center mb-4'>
                      <div className='flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full'>
                        <img
                          src='nightsable-assets/images/modals/check.svg'
                          alt=''
                        />
                      </div>
                      <p className='text-white'>Core engagement survey</p>
                    </li>
                    <li className='flex items-center mb-4'>
                      <div className='flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full'>
                        <img
                          src='nightsable-assets/images/modals/check.svg'
                          alt=''
                        />
                      </div>
                      <p className='text-white'>Topic-based assessments</p>
                    </li>
                    <li className='flex items-center mb-4'>
                      <div className='flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full'>
                        <img
                          src='nightsable-assets/images/modals/check.svg'
                          alt=''
                        />
                      </div>
                      <p className='text-white'>
                        Custom topic-based assessments
                      </p>
                    </li>
                    <li className='flex items-center'>
                      <div className='flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full'>
                        <img
                          src='nightsable-assets/images/modals/check.svg'
                          alt=''
                        />
                      </div>
                      <p className='text-white'>
                        Filterable heatmap &amp; analytics
                      </p>
                    </li>
                  </ul>
                  <a
                    className='relative z-10 block px-14 py-4 text-center font-medium tracking-2xl border-2 border-green-400 bg-green-400 hover:bg-green-500 text-black focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 rounded-full transition duration-300'
                    href='https://calendly.com/reancirl/dev-services' target='_blank'
                  >
                    Book a call
                  </a>
                  <img
                    className='absolute bottom-0 right-0'
                    src='nightsable-assets/images/pricing/shadow.svg'
                    alt=''
                  />
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
                <div className='relative px-8 pt-12 pb-12 h-full bg-gradient-radial-dark border-2 border-gray-900 border-opacity-30 overflow-hidden rounded-5xl'>
                  <p className='mb-2 text-lg text-white font-light'>
                    Business plan
                  </p>
                  <p className='mb-6 text-gray-300'>
                    During this phase the design is developed to meet the
                    required technical standards to
                  </p>
                  <p className='mb-4 text-white font-medium text-5xl'>
                    <span>$1500</span>
                    <span className='text-base font-medium text-gray-300'>
                      / month
                    </span>
                  </p>
                  <p className='mb-6 text-xs text-gray-300 font-light uppercase'>
                    What's includes
                  </p>
                  <ul className='mb-10'>
                    <li className='flex items-center mb-4'>
                      <div className='flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full'>
                        <img
                          src='nightsable-assets/images/modals/check.svg'
                          alt=''
                        />
                      </div>
                      <p className='text-white'>Core engagement survey</p>
                    </li>
                    <li className='flex items-center mb-4'>
                      <div className='flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full'>
                        <img
                          src='nightsable-assets/images/modals/check.svg'
                          alt=''
                        />
                      </div>
                      <p className='text-white'>Topic-based assessments</p>
                    </li>
                    <li className='flex items-center mb-4'>
                      <div className='flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full'>
                        <img
                          src='nightsable-assets/images/modals/check.svg'
                          alt=''
                        />
                      </div>
                      <p className='text-white'>
                        Custom topic-based assessments
                      </p>
                    </li>
                    <li className='flex items-center'>
                      <div className='flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full'>
                        <img
                          src='nightsable-assets/images/modals/check.svg'
                          alt=''
                        />
                      </div>
                      <p className='text-white'>
                        Filterable heatmap &amp; analytics
                      </p>
                    </li>
                  </ul>
                  <a
                    className='relative z-10 block px-14 py-4 text-center font-medium tracking-2xl border-2 border-green-400 bg-green-400 hover:bg-green-500 text-black focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 rounded-full transition duration-300'
                    href='https://calendly.com/reancirl/dev-services' target='_blank'
                  >
                    Book a call
                  </a>
                  <img
                    className='absolute bottom-0 right-0'
                    src='nightsable-assets/images/pricing/shadow.svg'
                    alt=''
                  />
                </div>
              </div>
              <div className='w-full lg:w-1/3 p-4'>
                <div className='relative px-8 pt-12 pb-12 h-full bg-gradient-radial-dark border-2 border-gray-900 border-opacity-30 overflow-hidden rounded-5xl'>
                  <p className='mb-2 text-lg text-white font-light'>Premium</p>
                  <p className='mb-6 text-gray-300'>
                    During this phase the design is developed to meet the
                    required technical standards to
                  </p>
                  <p className='mb-4 text-white font-medium text-5xl'>
                    <span>$2000</span>
                    <span className='text-base font-medium text-gray-300'>
                      / month
                    </span>
                  </p>
                  <p className='mb-6 text-xs text-gray-300 font-light uppercase'>
                    What's includes
                  </p>
                  <ul className='mb-10'>
                    <li className='flex items-center mb-4'>
                      <div className='flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full'>
                        <img
                          src='nightsable-assets/images/modals/check.svg'
                          alt=''
                        />
                      </div>
                      <p className='text-white'>Core engagement survey</p>
                    </li>
                    <li className='flex items-center mb-4'>
                      <div className='flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full'>
                        <img
                          src='nightsable-assets/images/modals/check.svg'
                          alt=''
                        />
                      </div>
                      <p className='text-white'>Topic-based assessments</p>
                    </li>
                    <li className='flex items-center mb-4'>
                      <div className='flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full'>
                        <img
                          src='nightsable-assets/images/modals/check.svg'
                          alt=''
                        />
                      </div>
                      <p className='text-white'>
                        Custom topic-based assessments
                      </p>
                    </li>
                    <li className='flex items-center'>
                      <div className='flex items-center justify-center w-5 h-5 mr-4 border border-green-400 rounded-full'>
                        <img
                          src='nightsable-assets/images/modals/check.svg'
                          alt=''
                        />
                      </div>
                      <p className='text-white'>
                        Filterable heatmap &amp; analytics
                      </p>
                    </li>
                  </ul>
                  <a
                    className='relative z-10 block px-14 py-4 text-center font-medium tracking-2xl border-2 border-green-400 bg-green-400 hover:bg-green-500 text-black focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 rounded-full transition duration-300'
                    href='https://calendly.com/reancirl/dev-services' target='_blank'
                  >
                    Book a call
                  </a>
                  <img
                    className='absolute bottom-0 right-0'
                    src='nightsable-assets/images/pricing/shadow.svg'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-24 overflow-hidden'>
          <div className='container px-4 mx-auto'>
            <div className='mb-16 md:max-w-2xl text-center mx-auto'>
              <span className='inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter'>
                Revolutionizing Development
              </span>
              <h2 className='text-7xl lg:text-8xl text-white tracking-7xl lg:tracking-8xl'>
                FAQ
              </h2>
            </div>
            <div className='max-w-4xl mx-auto'>
              <div className='flex flex-wrap -m-1.5'>
                <div className='w-full p-1.5'>
                  <a
                    className='block px-12 py-8 bg-gradient-radial-dark rounded-5xl'
                    href='#'
                  >
                    <div className='flex flex-wrap items-center -m-2'>
                      <div className='flex-1 p-2'>
                        <h3 className='text-2xl text-white tracking-2xl'>
                          What are the limits for money transfers from the
                          United States?
                        </h3>
                      </div>
                      <div className='w-auto p-2'>
                        <svg
                          width={21}
                          height={21}
                          viewBox='0 0 21 21'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M3.56969 7.79634L9.27469 13.5013C9.94844 14.1751 11.0509 14.1751 11.7247 13.5013L17.4297 7.79634'
                            stroke='white'
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='w-full p-1.5'>
                  <a
                    className='block px-12 py-8 bg-gradient-radial-dark rounded-5xl'
                    href='#'
                  >
                    <div className='flex flex-wrap items-center -m-2'>
                      <div className='flex-1 p-2'>
                        <h3 className='text-2xl text-white tracking-2xl'>
                          Is it safe to send money with Revolut?
                        </h3>
                      </div>
                      <div className='w-auto p-2'>
                        <svg
                          width={21}
                          height={21}
                          viewBox='0 0 21 21'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M3.56969 7.79634L9.27469 13.5013C9.94844 14.1751 11.0509 14.1751 11.7247 13.5013L17.4297 7.79634'
                            stroke='white'
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='w-full p-1.5'>
                  <a
                    className='block px-12 py-8 bg-gradient-radial-dark rounded-5xl'
                    href='#'
                  >
                    <div className='flex flex-wrap items-center -m-2'>
                      <div className='flex-1 p-2'>
                        <h3 className='text-2xl text-white tracking-2xl'>
                          How can I make an international transfer from the
                          United States?
                        </h3>
                      </div>
                      <div className='w-auto p-2'>
                        <svg
                          width={21}
                          height={21}
                          viewBox='0 0 21 21'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M3.56969 7.79634L9.27469 13.5013C9.94844 14.1751 11.0509 14.1751 11.7247 13.5013L17.4297 7.79634'
                            stroke='white'
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='w-full p-1.5'>
                  <a
                    className='block px-12 py-8 bg-gradient-radial-dark rounded-5xl'
                    href='#'
                  >
                    <div className='flex flex-wrap items-center -m-2'>
                      <div className='flex-1 p-2'>
                        <h3 className='text-2xl text-white tracking-2xl'>
                          How long does it take to send money abroad from the
                          United States?
                        </h3>
                      </div>
                      <div className='w-auto p-2'>
                        <svg
                          width={21}
                          height={21}
                          viewBox='0 0 21 21'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M3.56969 7.79634L9.27469 13.5013C9.94844 14.1751 11.0509 14.1751 11.7247 13.5013L17.4297 7.79634'
                            stroke='white'
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='w-full p-1.5'>
                  <a
                    className='block px-12 py-8 bg-gradient-radial-dark rounded-5xl'
                    href='#'
                  >
                    <div className='flex flex-wrap items-center -m-2'>
                      <div className='flex-1 p-2'>
                        <h3 className='text-2xl text-white tracking-2xl'>
                          Where can I transfer money to from the United States?
                        </h3>
                      </div>
                      <div className='w-auto p-2'>
                        <svg
                          width={21}
                          height={21}
                          viewBox='0 0 21 21'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M3.56969 7.79634L9.27469 13.5013C9.94844 14.1751 11.0509 14.1751 11.7247 13.5013L17.4297 7.79634'
                            stroke='white'
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-24 overflow-hidden'>
          <div className='container px-4 mx-auto'>
            <div className='mb-20 md:max-w-2xl text-center mx-auto'>
              <span className='inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter'>
                Revolutionizing Development
              </span>
              <h2 className='text-7xl lg:text-8xl text-white tracking-7xl lg:tracking-8xl'>
                Blog
              </h2>
            </div>
            <div className='flex flex-wrap -m-4'>
              <div className='w-full md:w-1/2 lg:w-1/3 p-4 md:mb-20'>
                <div className='mb-8 overflow-hidden rounded-3xl'>
                  <img
                    className='w-full transform hover:scale-125 transition duration-1000'
                    src='nightsable-assets/images/blog/cash4.png'
                    alt=''
                  />
                </div>
                <div className='flex flex-wrap items-center -m-2 mb-4'>
                  <div className='w-auto p-2'>
                    <span className='text-sm text-white font-medium tracking-tighter'>
                      Blog Post
                    </span>
                  </div>
                  <div className='w-auto p-2'>
                    <svg
                      width={3}
                      height={3}
                      viewBox='0 0 3 3'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M2.492 2.5H0.574V0.33H2.492V2.5Z' fill='white' />
                    </svg>
                  </div>
                  <div className='w-auto p-2'>
                    <span className='text-sm text-white font-medium tracking-tighter'>
                      9 min read
                    </span>
                  </div>
                </div>
                <a className='group block' href='#'>
                  <h3 className='mb-4 text-3xl text-white tracking-3xl hover:underline'>
                    Philippine Startups
                  </h3>
                </a>
                <p className='mb-6 text-white text-opacity-60'>
                  Nightsable is a strategic branding agency focused on brand
                  creation
                </p>
                <div className='flex flex-wrap -m-1.5'>
                  <div className='w-auto p-1.5'>
                    <div className='py-3.5 px-6 text-sm text-white hover:text-black font-medium tracking-tighter bg-blueGray-900 bg-opacity-30 hover:bg-green-400 rounded-full transition duration 300'>
                      Building our platform
                    </div>
                  </div>
                  <div className='w-auto p-1.5'>
                    <div className='py-3.5 px-6 text-sm text-white hover:text-black font-medium tracking-tighter bg-blueGray-900 bg-opacity-30 hover:bg-green-400 rounded-full transition duration 300'>
                      On-Demand
                    </div>
                  </div>
                  <div className='w-auto p-1.5'>
                    <div className='py-3.5 px-6 text-sm text-white hover:text-black font-medium tracking-tighter bg-blueGray-900 bg-opacity-30 hover:bg-green-400 rounded-full transition duration 300'>
                      Marketing
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 p-4 md:mb-20'>
                <div className='mb-8 overflow-hidden rounded-3xl'>
                  <img
                    className='w-full transform hover:scale-125 transition duration-1000'
                    src='nightsable-assets/images/blog/hand4.png'
                    alt=''
                  />
                </div>
                <div className='flex flex-wrap items-center -m-2 mb-4'>
                  <div className='w-auto p-2'>
                    <span className='text-sm text-white font-medium tracking-tighter'>
                      Blog Post
                    </span>
                  </div>
                  <div className='w-auto p-2'>
                    <svg
                      width={3}
                      height={3}
                      viewBox='0 0 3 3'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M2.492 2.5H0.574V0.33H2.492V2.5Z' fill='white' />
                    </svg>
                  </div>
                  <div className='w-auto p-2'>
                    <span className='text-sm text-white font-medium tracking-tighter'>
                      9 min read
                    </span>
                  </div>
                </div>
                <a className='group block' href='#'>
                  <h3 className='mb-4 text-3xl text-white tracking-3xl hover:underline'>
                    Philippine Startups
                  </h3>
                </a>
                <p className='mb-6 text-white text-opacity-60'>
                  Nightsable is a strategic branding agency focused on brand
                  creation
                </p>
                <div className='flex flex-wrap -m-1.5'>
                  <div className='w-auto p-1.5'>
                    <div className='py-3.5 px-6 text-sm text-white hover:text-black font-medium tracking-tighter bg-blueGray-900 bg-opacity-30 hover:bg-green-400 rounded-full transition duration 300'>
                      Building our platform
                    </div>
                  </div>
                  <div className='w-auto p-1.5'>
                    <div className='py-3.5 px-6 text-sm text-white hover:text-black font-medium tracking-tighter bg-blueGray-900 bg-opacity-30 hover:bg-green-400 rounded-full transition duration 300'>
                      On-Demand
                    </div>
                  </div>
                  <div className='w-auto p-1.5'>
                    <div className='py-3.5 px-6 text-sm text-white hover:text-black font-medium tracking-tighter bg-blueGray-900 bg-opacity-30 hover:bg-green-400 rounded-full transition duration 300'>
                      Marketing
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 p-4 md:mb-20'>
                <div className='mb-8 overflow-hidden rounded-3xl'>
                  <img
                    className='w-full transform hover:scale-125 transition duration-1000'
                    src='nightsable-assets/images/blog/skyscraper4.png'
                    alt=''
                  />
                </div>
                <div className='flex flex-wrap items-center -m-2 mb-4'>
                  <div className='w-auto p-2'>
                    <span className='text-sm text-white font-medium tracking-tighter'>
                      Blog Post
                    </span>
                  </div>
                  <div className='w-auto p-2'>
                    <svg
                      width={3}
                      height={3}
                      viewBox='0 0 3 3'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M2.492 2.5H0.574V0.33H2.492V2.5Z' fill='white' />
                    </svg>
                  </div>
                  <div className='w-auto p-2'>
                    <span className='text-sm text-white font-medium tracking-tighter'>
                      9 min read
                    </span>
                  </div>
                </div>
                <a className='group block' href='#'>
                  <h3 className='mb-4 text-3xl text-white tracking-3xl hover:underline'>
                    Philippine Startups
                  </h3>
                </a>
                <p className='mb-6 text-white text-opacity-60'>
                  Nightsable is a strategic branding agency focused on brand
                  creation
                </p>
                <div className='flex flex-wrap -m-1.5'>
                  <div className='w-auto p-1.5'>
                    <div className='py-3.5 px-6 text-sm text-white hover:text-black font-medium tracking-tighter bg-blueGray-900 bg-opacity-30 hover:bg-green-400 rounded-full transition duration 300'>
                      Building our platform
                    </div>
                  </div>
                  <div className='w-auto p-1.5'>
                    <div className='py-3.5 px-6 text-sm text-white hover:text-black font-medium tracking-tighter bg-blueGray-900 bg-opacity-30 hover:bg-green-400 rounded-full transition duration 300'>
                      On-Demand
                    </div>
                  </div>
                  <div className='w-auto p-1.5'>
                    <div className='py-3.5 px-6 text-sm text-white hover:text-black font-medium tracking-tighter bg-blueGray-900 bg-opacity-30 hover:bg-green-400 rounded-full transition duration 300'>
                      Marketing
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 p-4 md:mb-20 lg:mb-0'>
                <div className='mb-8 overflow-hidden rounded-3xl'>
                  <img
                    className='w-full transform hover:scale-125 transition duration-1000'
                    src='nightsable-assets/images/blog/cash4.png'
                    alt=''
                  />
                </div>
                <div className='flex flex-wrap items-center -m-2 mb-4'>
                  <div className='w-auto p-2'>
                    <span className='text-sm text-white font-medium tracking-tighter'>
                      Blog Post
                    </span>
                  </div>
                  <div className='w-auto p-2'>
                    <svg
                      width={3}
                      height={3}
                      viewBox='0 0 3 3'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M2.492 2.5H0.574V0.33H2.492V2.5Z' fill='white' />
                    </svg>
                  </div>
                  <div className='w-auto p-2'>
                    <span className='text-sm text-white font-medium tracking-tighter'>
                      9 min read
                    </span>
                  </div>
                </div>
                <a className='group block' href='#'>
                  <h3 className='mb-4 text-3xl text-white tracking-3xl hover:underline'>
                    Philippine Startups
                  </h3>
                </a>
                <p className='mb-6 text-white text-opacity-60'>
                  Nightsable is a strategic branding agency focused on brand
                  creation
                </p>
                <div className='flex flex-wrap -m-1.5'>
                  <div className='w-auto p-1.5'>
                    <div className='py-3.5 px-6 text-sm text-white hover:text-black font-medium tracking-tighter bg-blueGray-900 bg-opacity-30 hover:bg-green-400 rounded-full transition duration 300'>
                      Building our platform
                    </div>
                  </div>
                  <div className='w-auto p-1.5'>
                    <div className='py-3.5 px-6 text-sm text-white hover:text-black font-medium tracking-tighter bg-blueGray-900 bg-opacity-30 hover:bg-green-400 rounded-full transition duration 300'>
                      On-Demand
                    </div>
                  </div>
                  <div className='w-auto p-1.5'>
                    <div className='py-3.5 px-6 text-sm text-white hover:text-black font-medium tracking-tighter bg-blueGray-900 bg-opacity-30 hover:bg-green-400 rounded-full transition duration 300'>
                      Marketing
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
                <div className='mb-8 overflow-hidden rounded-3xl'>
                  <img
                    className='w-full transform hover:scale-125 transition duration-1000'
                    src='nightsable-assets/images/blog/hand4.png'
                    alt=''
                  />
                </div>
                <div className='flex flex-wrap items-center -m-2 mb-4'>
                  <div className='w-auto p-2'>
                    <span className='text-sm text-white font-medium tracking-tighter'>
                      Blog Post
                    </span>
                  </div>
                  <div className='w-auto p-2'>
                    <svg
                      width={3}
                      height={3}
                      viewBox='0 0 3 3'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M2.492 2.5H0.574V0.33H2.492V2.5Z' fill='white' />
                    </svg>
                  </div>
                  <div className='w-auto p-2'>
                    <span className='text-sm text-white font-medium tracking-tighter'>
                      9 min read
                    </span>
                  </div>
                </div>
                <a className='group block' href='#'>
                  <h3 className='mb-4 text-3xl text-white tracking-3xl hover:underline'>
                    Philippine Startups
                  </h3>
                </a>
                <p className='mb-6 text-white text-opacity-60'>
                  Nightsable is a strategic branding agency focused on brand
                  creation
                </p>
                <div className='flex flex-wrap -m-1.5'>
                  <div className='w-auto p-1.5'>
                    <div className='py-3.5 px-6 text-sm text-white hover:text-black font-medium tracking-tighter bg-blueGray-900 bg-opacity-30 hover:bg-green-400 rounded-full transition duration 300'>
                      Building our platform
                    </div>
                  </div>
                  <div className='w-auto p-1.5'>
                    <div className='py-3.5 px-6 text-sm text-white hover:text-black font-medium tracking-tighter bg-blueGray-900 bg-opacity-30 hover:bg-green-400 rounded-full transition duration 300'>
                      On-Demand
                    </div>
                  </div>
                  <div className='w-auto p-1.5'>
                    <div className='py-3.5 px-6 text-sm text-white hover:text-black font-medium tracking-tighter bg-blueGray-900 bg-opacity-30 hover:bg-green-400 rounded-full transition duration 300'>
                      Marketing
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
                <div className='mb-8 overflow-hidden rounded-3xl'>
                  <img
                    className='w-full transform hover:scale-125 transition duration-1000'
                    src='nightsable-assets/images/blog/skyscraper4.png'
                    alt=''
                  />
                </div>
                <div className='flex flex-wrap items-center -m-2 mb-4'>
                  <div className='w-auto p-2'>
                    <span className='text-sm text-white font-medium tracking-tighter'>
                      Blog Post
                    </span>
                  </div>
                  <div className='w-auto p-2'>
                    <svg
                      width={3}
                      height={3}
                      viewBox='0 0 3 3'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M2.492 2.5H0.574V0.33H2.492V2.5Z' fill='white' />
                    </svg>
                  </div>
                  <div className='w-auto p-2'>
                    <span className='text-sm text-white font-medium tracking-tighter'>
                      9 min read
                    </span>
                  </div>
                </div>
                <a className='group block' href='#'>
                  <h3 className='mb-4 text-3xl text-white tracking-3xl hover:underline'>
                    Philippine Startups
                  </h3>
                </a>
                <p className='mb-6 text-white text-opacity-60'>
                  Nightsable is a strategic branding agency focused on brand
                  creation
                </p>
                <div className='flex flex-wrap -m-1.5'>
                  <div className='w-auto p-1.5'>
                    <div className='py-3.5 px-6 text-sm text-white hover:text-black font-medium tracking-tighter bg-blueGray-900 bg-opacity-30 hover:bg-green-400 rounded-full transition duration 300'>
                      Building our platform
                    </div>
                  </div>
                  <div className='w-auto p-1.5'>
                    <div className='py-3.5 px-6 text-sm text-white hover:text-black font-medium tracking-tighter bg-blueGray-900 bg-opacity-30 hover:bg-green-400 rounded-full transition duration 300'>
                      On-Demand
                    </div>
                  </div>
                  <div className='w-auto p-1.5'>
                    <div className='py-3.5 px-6 text-sm text-white hover:text-black font-medium tracking-tighter bg-blueGray-900 bg-opacity-30 hover:bg-green-400 rounded-full transition duration 300'>
                      Marketing
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-24 overflow-hidden'>
          <div className='container px-4 mx-auto'>
            <div className='py-14 bg-gray-900 bg-opacity-30 rounded-6xl'>
              <div className='md:max-w-2xl mx-auto text-center px-4'>
                <span className='inline-block mb-4 text-sm text-green-400 font-medium tracking-tighter'>
                  Revolutionizing Development
                </span>
                <h2 className='mb-6 text-5xl text-white tracking-5xl'>
                  Industry insights you wan&amp;grave;t delete. Delivered to
                  your inbox weekly
                </h2>
                <p className='mb-12 text-gray-300 max-w-lg mx-auto'>
                  Join 10,000 founders, get early access to Nightsable features,
                  and learn how to squeeze every drop of revenue
                </p>
              </div>
              <div className='px-4'>
                <div className='flex flex-wrap md:max-w-xl mx-auto -m-2'>
                  <div className='w-full md:flex-1 p-2'>
                    <div className=''>
                      <MailchimpForm 
                          inputStyle="px-6 py-4 text-gray-300 placeholder-gray-300 outline-none bg-transparent mx-auto border border-gray-900 focus-within:border-white overflow-hidden rounded-3xl"
                          buttonStyle="px-14 py-4 font-medium tracking-2xl border-2 border-green-400 bg-green-400 hover:bg-green-500 text-black focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 rounded-full transition duration-300"
                          placeholder="Email"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-24 overflow-hidden'>
          <div className='container px-4 mx-auto'>
            Reancirl Balaba
            <div className='flex flex-wrap items-end -m-8 mb-20'>
              <div className='w-full md:w-1/2 p-8'>
                <div className='md:max-w-md'>
                  <h3 className='mb-10 text-3xl text-white'>
                    Subscribe to get tips and tactics to grow the way you want.
                  </h3>
                  {/* <div className='relative border border-gray-900 focus-within:border-white overflow-hidden rounded-3xl'>
                    <input
                      className='block w-full py-5 pl-8 pr-24 text-lg text-gray-300 placeholder-gray-400 bg-transparent'
                      type='text'
                      placeholder='Your email adress'
                      style={{ height: 72 }}
                    />
                    <a
                      className='absolute right-0 top-0 flex items-center justify-center px-8 h-full bg-green-400 hover:bg-green-500 rounded-3xl transition duration-300'
                      href='#'
                    >
                      <svg
                        width={10}
                        height={17}
                        viewBox='0 0 10 17'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M1.79687 15.4299L7.50188 9.72495C8.17563 9.0512 8.17563 7.9487 7.50188 7.27495L1.79688 1.56995'
                          stroke='black'
                          strokeWidth={2}
                          strokeMiterlimit={10}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </a>
                  </div> */}
                </div>
              </div>
              <div className='w-full md:w-1/2 p-8'>
                <div className='flex flex-wrap md:justify-end -m-8 lg:-m-20'>
                  <div className='w-full md:w-auto p-8 lg:p-20'>
                    <h3 className='mb-6 text-lg text-white font-medium'>
                      About
                    </h3>
                    <ul>
                      <li className='mb-2.5'>
                        <a
                          className='inline-block text-lg font-medium text-gray-300 hover:text-white transition duration-300'
                          href='#'
                        >
                          Contact
                        </a>
                      </li>
                      <li className='mb-2.5'>
                        <a
                          className='inline-block text-lg font-medium text-gray-300 hover:text-white transition duration-300'
                          href='#'
                        >
                          Blog
                        </a>
                      </li>
                      <li className='mb-2.5'>
                        <a
                          className='inline-block text-lg font-medium text-gray-300 hover:text-white transition duration-300'
                          href='#'
                        >
                          Our Story
                        </a>
                      </li>
                      <li>
                        <a
                          className='inline-block text-lg font-medium text-gray-300 hover:text-white transition duration-300'
                          href='#'
                        >
                          Careers
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='w-full md:w-auto p-8 lg:p-20'>
                    <h3 className='mb-6 text-lg text-white font-medium'>
                      Company
                    </h3>
                    <ul>
                      <li className='mb-2.5'>
                        <a
                          className='inline-block text-lg font-medium text-gray-300 hover:text-white transition duration-300'
                          href='#'
                        >
                          Press
                        </a>
                      </li>
                      <li className='mb-2.5'>
                        <a
                          className='inline-block text-lg font-medium text-gray-300 hover:text-white transition duration-300'
                          href='#'
                        >
                          Brand Assets
                        </a>
                      </li>
                      <li className='mb-2.5'>
                        <a
                          className='inline-block text-lg font-medium text-gray-300 hover:text-white transition duration-300'
                          href='#'
                        >
                          Changelog
                        </a>
                      </li>
                      <li>
                        <a
                          className='inline-block text-lg font-medium text-gray-300 hover:text-white transition duration-300'
                          href='#'
                        >
                          Help centre
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap justify-between -m-4'>
              <div className='w-auto p-4'>
                <p className='text-white text-opacity-60 font-medium'>
                  © 2024 Reancirl Balaba
                </p>
              </div>
              <div className='w-auto p-4'>
                <ul className='flex flex-wrap items-center -m-2 sm:-m-5'>
                  <li className='p-2 sm:p-5'>
                    <a className='inline-block' href='#'>
                      <img
                        src='nightsable-assets/images/footers/twitter-white.svg'
                        alt=''
                      />
                    </a>
                  </li>
                  <li className='p-2 sm:p-5'>
                    <a className='inline-block' href='#'>
                      <img
                        src='nightsable-assets/images/footers/linkedin-white.svg'
                        alt=''
                      />
                    </a>
                  </li>
                  <li className='p-2 sm:p-5'>
                    <a className='inline-block' href='#'>
                      <img
                        src='nightsable-assets/images/footers/tiktok-wh.svg'
                        alt=''
                      />
                    </a>
                  </li>
                  <li className='p-2 sm:p-5'>
                    <a className='inline-block' href='#'>
                      <img
                        src='nightsable-assets/images/footers/fb-white.svg'
                        alt=''
                      />
                    </a>
                  </li>
                  <li className='p-2 sm:p-5'>
                    <a className='inline-block' href='#'>
                      <img
                        src='nightsable-assets/images/footers/instagram-white.svg'
                        alt=''
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}

