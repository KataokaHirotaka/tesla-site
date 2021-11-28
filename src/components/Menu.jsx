import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
import './styles/menu.scss';

const Menu = props => {
	const {openFlag, setOpenFlag} = props;
	useEffect(() => {
		const menu = document.querySelector('.menu-wrapper');
		if (openFlag === true) {
			menu.classList.add('open');
		} else {
			menu.classList.remove('open');
		}
	}, [openFlag])
	
	return (
		<div className="menu-wrapper">
			<nav className="menu">
				<button className="close-btn" onClick={() => setOpenFlag(false)}><span></span></button>
				<ul>
					<li className="menu-list top" onClick={() => setOpenFlag(false)}>
						<Link
							to="/models"
						>
							<span className="menu-list-title">Model S</span>
						</Link>
					</li>
					<li className="menu-list" onClick={() => setOpenFlag(false)}>
						<Link
							to="/model3"
						>
							<span className="menu-list-title">Model 3</span>
						</Link>
					</li>
					<li className="menu-list" onClick={() => setOpenFlag(false)}>
						<Link
							to="/modelx"
						>
							<span className="menu-list-title">Model X</span>
						</Link>
					</li>
					<li className="menu-list" onClick={() => setOpenFlag(false)}>
						<Link
							to="/modely"
						>
							<span className="menu-list-title">Model Y</span>
						</Link>
					</li>
					<li className="menu-list" onClick={() => setOpenFlag(false)}>
						<Link
							to="/models"
						>
							<span className="menu-list-title">在庫品</span>
						</Link>
					</li>
					<li className="menu-list" onClick={() => setOpenFlag(false)}>
						<Link
							to="/models"
						>
							<span className="menu-list-title">認定中古車</span>
						</Link>
					</li>
					<li className="menu-list" onClick={() => setOpenFlag(false)}>
						<Link
							to="/models"
						>
							<span className="menu-list-title">下取り</span>
						</Link>
					</li>
					<li className="menu-list" onClick={() => setOpenFlag(false)}>
						<Link
							to="/models"
						>
							<span className="menu-list-title">試乗を予約する</span>
						</Link>
					</li>
					<li className="menu-list" onClick={() => setOpenFlag(false)}>
						<Link
							to="/models"
						>
							<span className="menu-list-title">Powerwall</span>
						</Link>
					</li>
					<li className="menu-list" onClick={() => setOpenFlag(false)}>
						<Link
							to="/models"
						>
							<span className="menu-list-title">Energy</span>
						</Link>
					</li>
					<li className="menu-list" onClick={() => setOpenFlag(false)}>
						<Link
							to="/models"
						>
							<span className="menu-list-title">商業・産業用エネルギーシステム</span>
						</Link>
					</li>
					<li className="menu-list" onClick={() => setOpenFlag(false)}>
						<Link
							to="/models"
						>
							<span className="menu-list-title">電力系統用エネルギーシステム</span>
						</Link>
					</li>
					<li className="menu-list" onClick={() => setOpenFlag(false)}>
						<Link
							to="/models"
						>
							<span className="menu-list-title">充電</span>
						</Link>
					</li>
					<li className="menu-list" onClick={() => setOpenFlag(false)}>
						<Link
							to="/models"
						>
							<span className="menu-list-title">アクセス</span>
						</Link>
					</li>
					<li className="menu-list" onClick={() => setOpenFlag(false)}>
						<Link
							to="/models"
						>
							<span className="menu-list-title">サポート</span>
						</Link>
					</li>
					<li className="menu-list" onClick={() => setOpenFlag(false)}>
						<Link
							to="/models"
						>
							<span className="menu-list-title">投資家情報</span>
						</Link>
					</li>
					<li className="menu-list" onClick={() => setOpenFlag(false)}>
						<Link
							to="/models"
						>
							<span className="menu-list-title">ショップ</span>
						</Link>
					</li>
					<li className="menu-list" onClick={() => setOpenFlag(false)}>
						<Link
							to="/models"
						>
							<span className="menu-list-title">アカウント</span>
						</Link>
					</li>
					<li className="menu-list" onClick={() => setOpenFlag(false)}>
						<Link
							to="/models"
						>
							<span className="menu-list-title">その他</span>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Menu;