const menus = {
  config: [], //기본 설정
  member: [
    { url: '/admin/member', name: '회원목록' },
    { url: '/admin/member/add', name: '회원등록' },
  ],
  board: [
    { url: '/admin/board', name: '게시판_목록' },
    { url: '/admin/board/add', name: '게시판_등록' },
    { url: '/admin/board/list', name: '게시글_관리' },
  ],
};

export const getSubMenus = (menuCode) => {
  if (!menuCode || !menuCode.trim()) {
    menuCode = window.location.pathname.split('/')[2];

    return menuCode ? menus[menuCode] : [];
  }
};
export default menus;
