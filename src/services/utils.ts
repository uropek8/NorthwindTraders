const API_URL = import.meta.env.VITE_AVATAR_API_PATH

function getAvatarPath(avatar: string): string {
  const encodedName = encodeURIComponent(avatar)

  return `${API_URL}${encodedName}.svg`
}

export { getAvatarPath }
