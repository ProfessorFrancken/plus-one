import React from 'react'
import PropTypes from 'prop-types'
import './Members.css'
import LinkButton from './../../App/LinkButton'

const cosmetics = (cosmetics) => {
  console.log(cosmetics)

  const isPositive = (number) => Number.isInteger(number) && number > 0;

  const cosmeticSize = (isPositive(cosmetics.button.width) && isPositive(cosmetics.button.height))
  ? {
    width: cosmetics.button.width,
    height: cosmetics.button.height,
    alignSelf: 'center',
    justifySelf: 'center'
  } : {}

  return {
    backgroundColor: cosmetics.color,
    backgroundImage: cosmetics.image
                     ? `url(https:/old.professorfrancken.nl/database/streep/afbeeldingen/${cosmetics.image})`
                     : undefined,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%",
    ...cosmeticSize
  }
}

const Member = ({ member }) => (
  <LinkButton
    key={member.id}
    className="SelectionItem btn btn-outline-light d-flex flex-column justify-content-center"
    to="/products"
    style={cosmetics(member.cosmetics)}
  >
    {member.firstName}<br />
    {member.surname}
  </LinkButton>
)

const Members = ({ members }) => (
  <nav className="SelectionGrid">
    {members.map((member) => <Member member={member} key={member.id} />)}
  </nav>
)

Members.propTypes = {
  members: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstname: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
  })).isRequired
}

export default Members