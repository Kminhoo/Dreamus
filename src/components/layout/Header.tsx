import { Link } from 'react-router-dom'

import styles from '@components/layout/Header.module.scss'
import ListItem from '../common/ListItem'
import { useState } from 'react'

function Header() {
  const [showDreamus, setShowDreamus] = useState<boolean>(false)

  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        {/* 로고 */}
        <h2 className={styles.header__logo}>
          <Link className={styles.header__logo__link} to="/">
            <LogoIcon className={styles.header__logo__icon} />
            <span className={styles.header__logo__text}>Dreamus</span>
          </Link>
        </h2>

        {/* 메뉴 */}
        <nav>
          <ul className={styles.header__nav}>
            <li>
              <h3 onClick={() => setShowDreamus(!showDreamus)}>
                <span>드림어스</span>
                {showDreamus ? <UpArrow /> : <DownArrow />}
              </h3>
              <ul>
                <ListItem
                  title="Dreamus 소개"
                  path="/dreamus/introduction"
                  className={styles.header__list__item}
                />
                <ListItem
                  title="CEO 인사"
                  path="/dreamus/ceo"
                  className={styles.header__list__item}
                />
              </ul>
            </li>
            <ListItem
              title="BI"
              path="/bi"
              className={styles.header__list__item}
            />
            <li>
              <h3>꿈의실현</h3>
              <ul>
                <ListItem
                  title="씽씽큐 뮤직"
                  path="/realization/singsingq-music"
                  className={styles.header__list__item}
                />
                <ListItem
                  title="쿵! 치! 타! 드럼,난타,장구"
                  path="/realization/drum-nanta-janggu"
                  className={styles.header__list__item}
                />
                <ListItem
                  title="룰루랄라 피아노"
                  path="/realization/lululala-piano"
                  className={styles.header__list__item}
                />
                <ListItem
                  title="생각놀이터 띵동"
                  path="/"
                  className={styles.header__list__item}
                />
                <ListItem
                  title="맘펴니 뮤직"
                  path="/realization/momfany-music"
                  className={styles.header__list__item}
                />
              </ul>
            </li>
            <ListItem
              title="함께일해요"
              path="/work-together"
              className={styles.header__list__item}
            />
            <ListItem
              title="듣.보.드"
              path="/dreamus-gallery"
              className={styles.header__list__item}
            />
            <ListItem
              title="수업 신청"
              path="/class-registration"
              className={styles.header__list__item}
            />
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

const UpArrow = () => {
  return (
    <svg
      height="512px"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 512 512"
      width="512px"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M413.1,327.3l-1.8-2.1l-136-156.5c-4.6-5.3-11.5-8.6-19.2-8.6c-7.7,0-14.6,3.4-19.2,8.6L101,324.9l-2.3,2.6  C97,330,96,333,96,336.2c0,8.7,7.4,15.8,16.6,15.8v0h286.8v0c9.2,0,16.6-7.1,16.6-15.8C416,332.9,414.9,329.8,413.1,327.3z" />
    </svg>
  )
}

const DownArrow = () => {
  return (
    <svg
      height="512px"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 512 512"
      width="512px"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M98.9,184.7l1.8,2.1l136,156.5c4.6,5.3,11.5,8.6,19.2,8.6c7.7,0,14.6-3.4,19.2-8.6L411,187.1l2.3-2.6  c1.7-2.5,2.7-5.5,2.7-8.7c0-8.7-7.4-15.8-16.6-15.8v0H112.6v0c-9.2,0-16.6,7.1-16.6,15.8C96,179.1,97.1,182.2,98.9,184.7z" />
    </svg>
  )
}

const LogoIcon = ({ className }: { className: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      className={className}
    >
      <g id="_x33_8_x2C__cd_x2C__musical_note_x2C__music_and_multimedia_x2C__compact_disc_x2C__song_x2C__music">
        <g>
          <g>
            <path
              style={{ fill: '#283954' }}
              d="M376.246,168.278c-3.491-4.277-9.791-4.912-14.071-1.421c-4.277,3.493-4.914,9.793-1.421,14.071     c27.565,33.758,42.746,76.401,42.746,120.075c0,104.767-85.233,190-190,190s-190-85.233-190-190s85.233-190,190-190     c39.395,0,77.17,11.938,109.242,34.525c4.517,3.182,10.754,2.098,13.934-2.418c3.181-4.516,2.098-10.754-2.418-13.934     c-35.461-24.974-77.219-38.174-120.758-38.174c-115.794,0-210,94.206-210,210s94.206,210,210,210s210-94.206,210-210     C423.5,252.733,406.718,205.597,376.246,168.278z"
            />
            <path
              style={{ fill: '#283954' }}
              d="M213.5,181.004c31.271,0,60.872,11.962,83.352,33.682c3.972,3.838,10.302,3.73,14.14-0.243     c3.838-3.972,3.729-10.302-0.243-14.14c-26.229-25.342-60.765-39.299-97.248-39.299c-77.196,0-140,62.804-140,140     c0,31.908,10.455,61.959,30.234,86.903c3.427,4.322,9.717,5.057,14.049,1.623c4.328-3.432,5.054-9.722,1.623-14.049     C102.458,354.107,93.5,328.353,93.5,301.004C93.5,234.836,147.332,181.004,213.5,181.004z"
            />
            <path
              style={{ fill: '#283954' }}
              d="M334.08,251.302c-5.253,1.707-8.127,7.349-6.421,12.601c3.876,11.928,5.841,24.41,5.841,37.101     c0,66.168-53.832,120-120,120c-24.053,0-47.256-7.088-67.102-20.496c-4.577-3.09-10.792-1.888-13.885,2.688     c-3.092,4.576-1.889,10.793,2.688,13.885c23.165,15.651,50.24,23.924,78.299,23.924c77.196,0,140-62.804,140-140     c0-14.792-2.294-29.354-6.819-43.28C344.974,252.47,339.333,249.595,334.08,251.302z"
            />
          </g>
          <g>
            <path
              style={{ fill: '#DC5461' }}
              d="M495.434,1.485l-53.88,17.36c-5.257,1.694-8.146,7.329-6.452,12.585     c1.694,5.257,7.33,8.145,12.585,6.452l40.813-13.15v151.271c0,13.785-11.215,25-25,25s-25-11.215-25-25     c0-12.36,9.208-23.002,21.419-24.752c4.924-0.705,8.581-4.924,8.581-9.898v-70.35c0-6.611-6.308-11.393-12.652-9.642l-90,24.76     c-4.34,1.193-7.348,5.141-7.348,9.642v130.24c0,12.85-9.614,23.538-22.405,24.867c-14.532,1.584-27.595-9.934-27.595-24.867     c0-12.485,9.216-23.007,21.416-24.751c4.926-0.705,8.584-4.924,8.584-9.899V73.047l71.106-22.905     c5.257-1.693,8.146-7.328,6.452-12.585c-1.693-5.256-7.322-8.147-12.585-6.452l-78.04,25.14     c-4.132,1.331-6.934,5.177-6.934,9.519v117.795c-17.496,6.172-30,22.914-30,42.445c0,26.724,23.311,47.605,49.704,44.756     c22.973-2.388,40.296-21.628,40.296-44.756v-122.62l70-19.257v49.446c-17.588,6.259-30,23.188-30,42.431     c0,24.813,20.187,45,45,45s45-20.187,45-45v-165C508.5,4.207,501.864-0.591,495.434,1.485z"
            />
            <path
              style={{ fill: '#DC5461' }}
              d="M213.5,231.004c-38.598,0-70,31.402-70,70s31.402,70,70,70s70-31.402,70-70     S252.098,231.004,213.5,231.004z M213.5,351.004c-27.57,0-50-22.43-50-50s22.43-50,50-50s50,22.43,50,50     S241.07,351.004,213.5,351.004z"
            />
          </g>
        </g>
      </g>
      <g id="Layer_1" />
    </svg>
  )
}
