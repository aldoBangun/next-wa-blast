export const media = {
  getMedia: { action: 'media', subAction: 'getMedia' }
}

export const peopleMovement = {
  getPeopleMovement: { action: 'movement', subAction: 'getPeopleMovement' }
}

export const users = {
  changePassword: { action: 'Users', subAction: 'changePassword' },
  userLists: { action: 'Users', subAction: 'lists' },
  createUser: { action: 'Users', subAction: 'create' },
  deleteUser: { action: 'Users', subAction: 'delete' },
  enableUser: { action: 'Users', subAction: 'enable' },
  disableUser: { action: 'Users', subAction: 'disable' },
  updateUser: { action: 'Users', subAction: 'update' },
}

export const accounts = {
  accountLists: { action: 'Accounts', subAction: 'lists' },
  requestQr: { action: 'Accounts', subAction: 'requestQr' }
}