import {
  Notfouncontainer,
  NotfoundImage,
  NotfoundHeading,
  Notfoundtext,
} from './styledComponents'

const PageNotFound = () => (
  <Notfouncontainer>
    <NotfoundImage
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NotfoundHeading>Page Not Found</NotfoundHeading>
    <Notfoundtext>
      We are sorry, the page you requested could not be found
    </Notfoundtext>
  </Notfouncontainer>
)
export default PageNotFound
