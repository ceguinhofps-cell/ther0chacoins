import { useMemo, useState } from 'react';
import { ArrowUpRight, Check, ChevronDown, CircleHelp, Clock3, Crown, Gamepad2, Menu, MessageCircle, ShieldCheck, ShoppingBag, Sparkles, X, Zap } from 'lucide-react';
import character from './assets/personagem-kc.png';

type Product = { id:number; coins:string; price:string; tag?:string; featured?:boolean };
const initialProducts: Product[] = [
  {id:1,coins:'5.000',price:'48,90'},
  {id:2,coins:'10.000',price:'97,80',tag:'MAIS PROCURADO',featured:true},
  {id:3,coins:'20.000',price:'192,90',tag:'MELHOR ESCOLHA'},
  {id:4,coins:'30.000',price:'288,90'},
  {id:5,coins:'50.000',price:'479,90',tag:'PARA QUEM QUER MAIS'}
];
const whatsapp = '5531986600292';
function App(){
  const [products,setProducts] = useState(initialProducts);
  const [menuOpen,setMenuOpen] = useState(false);
  const [faqOpen,setFaqOpen] = useState<number|null>(0);
  const [adminOpen,setAdminOpen] = useState(false);
  const [adminPass,setAdminPass] = useState('');
  const [authenticated,setAuthenticated] = useState(false);
  const [notice,setNotice] = useState('');
  const [drafts,setDrafts] = useState<Record<number,string>>({});
  const waLink = (p:Product) => `https://wa.me/${whatsapp}?text=${encodeURIComponent(`Olá! Quero comprar o pacote de ${p.coins} Coins por R$ ${p.price}.`)}`;
  const totalCoins = useMemo(()=>products.length,[products]);
  const savePrice = (id:number) => { setProducts(old=>old.map(p=>p.id===id?{...p,price:(drafts[id]||p.price).replace('.',',')}:p)); setNotice('Preço atualizado nesta sessão. Para persistir, conecte o painel à API.'); };
  return <div className="site-shell">
    <div className="topline"><span><Sparkles size={13}/> OFERTA ESPECIAL POR TEMPO LIMITADO</span><span className="topline-right"><ShieldCheck size={13}/> COMPRA DIRETA PELO WHATSAPP</span></div>
    <header className="header wrap"><a className="brand" href="#inicio"><span className="brand-mark">R</span><span>THE<span className="gold">R0CHA</span><small>COINS STORE</small></span></a>
      <nav className={menuOpen?'nav nav-open':'nav'}><a href="#pacotes" onClick={()=>setMenuOpen(false)}>Pacotes</a><a href="#vantagens" onClick={()=>setMenuOpen(false)}>Vantagens</a><a href="#duvidas" onClick={()=>setMenuOpen(false)}>Dúvidas</a><a className="nav-cta" href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer"><MessageCircle size={16}/> Falar com suporte</a></nav>
      <button className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Abrir menu">{menuOpen?<X/>:<Menu/>}</button>
    </header>
    <main>
      <section className="hero" id="inicio"><div className="hero-glow"/><div className="wrap hero-inner">
        <div className="hero-copy"><div className="eyebrow"><span className="eyebrow-line"/> EVENTO ESPECIAL • THE R0CHA COINS</div>
          <div className="black-friday"><span>BLACK</span><span className="bf-gold">FRIDAY</span><i>◆</i></div>
          <p className="promo-kicker">PROMOÇÃO SEMANA DA</p>
          <h1>Prepare-se para<br/><em>evoluir sua jornada.</em></h1>
          <p className="hero-description">Coins para ir mais longe. Escolha seu pacote e garanta seus créditos com atendimento rápido e seguro.</p>
          <a className="primary-btn" href="#pacotes">ESCOLHER MEU PACOTE <ArrowUpRight size={18}/></a>
          <div className="hero-trust"><span><ShieldCheck size={15}/> Atendimento seguro</span><span><Zap size={15}/> Agilidade na compra</span></div>
        </div>
        <div className="hero-character"><div className="character-aura"/><img src={character} alt="Personagem KC apresentando os pacotes de Coins"/><div className="point-label"><span>SEU PRÓXIMO NÍVEL</span><b>COMEÇA AQUI <ArrowUpRight size={14}/></b></div></div>
        <div className="hero-side-note">THE R0CHA COINS <span>•</span> SEASON SALE</div>
      </div><div className="hero-bottom-line"/></section>
      <section className="packages section wrap" id="pacotes"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line"/> LOJA DE COINS</div><h2>Escolha seu <em>pacote</em></h2><p>Selecione a quantidade ideal para sua aventura.</p></div><div className="limited"><Clock3 size={17}/><span>OFERTA DA BLACK FRIDAY<br/><b>Por tempo limitado</b></span></div></div>
        <div className="package-grid">{products.map(p=><article className={`package-card ${p.featured?'featured':''}`} key={p.id}>{p.tag&&<div className="package-tag">{p.tag}</div>}<div className="coin-icon"><span>₵</span></div><div className="coin-amount">{p.coins}<small>COINS</small></div><div className="price-label">POR APENAS</div><div className="price"><small>R$</small> {p.price}</div><div className="card-divider"/><div className="card-perk"><Check size={15}/> Compra pelo WhatsApp</div><div className="card-perk"><Check size={15}/> Atendimento personalizado</div><a className={p.featured?'buy-btn buy-btn-gold':'buy-btn'} href={waLink(p)} target="_blank" rel="noreferrer"><ShoppingBag size={16}/> COMPRAR AGORA</a></article>)}</div>
        <p className="secure-note"><ShieldCheck size={15}/> Ao clicar em comprar, você será direcionado ao nosso WhatsApp para finalizar seu pedido.</p>
      </section>
      <section className="benefits" id="vantagens"><div className="wrap"><div className="eyebrow"><span className="eyebrow-line"/> POR QUE COMPRAR AQUI?</div><h2>Sua experiência em <em>primeiro lugar.</em></h2><div className="benefit-grid"><div className="benefit"><div className="benefit-icon"><Zap/></div><h3>Agilidade</h3><p>Atendimento direto para tornar sua compra simples e rápida.</p></div><div className="benefit"><div className="benefit-icon"><ShieldCheck/></div><h3>Mais confiança</h3><p>Suporte durante o processo de compra pelo WhatsApp.</p></div><div className="benefit"><div className="benefit-icon"><Crown/></div><h3>Mais possibilidades</h3><p>Escolha entre diferentes pacotes e avance no seu ritmo.</p></div></div></div></section>
      <section className="faq section wrap" id="duvidas"><div className="faq-intro"><div className="eyebrow"><span className="eyebrow-line"/> PRECISA DE AJUDA?</div><h2>Dúvidas <em>frequentes</em></h2><p>Confira as respostas ou fale diretamente com nosso atendimento.</p><a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer" className="text-link">Falar com suporte <ArrowUpRight size={15}/></a></div><div className="faq-list">{[{q:'Como faço para comprar Coins?',a:'Escolha um dos pacotes e clique em “Comprar agora”. Você será direcionado ao nosso WhatsApp para combinar os detalhes do pedido.'},{q:'Como recebo meu pedido?',a:'As informações de entrega são combinadas diretamente com o atendimento após a confirmação do pedido.'},{q:'Posso tirar dúvidas antes de comprar?',a:'Claro! Nosso atendimento pelo WhatsApp pode orientar você antes de finalizar a compra.'}].map((f,i)=><div className="faq-item" key={f.q}><button onClick={()=>setFaqOpen(faqOpen===i?null:i)}><span>{f.q}</span><ChevronDown className={faqOpen===i?'rotated':''} size={18}/></button>{faqOpen===i&&<p>{f.a}</p>}</div>)}</div></section>
    </main>
    <footer className="footer"><div className="wrap footer-inner"><a className="brand" href="#inicio"><span className="brand-mark">R</span><span>THE<span className="gold">R0CHA</span><small>COINS STORE</small></span></a><p>© {new Date().getFullYear()} TheR0cHa Coins. Todos os direitos reservados.</p><button className="admin-link" onClick={()=>setAdminOpen(true)}>Área administrativa</button></div></footer>
    {adminOpen&&<div className="modal-backdrop" onClick={()=>setAdminOpen(false)}><div className="admin-modal" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setAdminOpen(false)}><X/></button><div className="eyebrow"><span className="eyebrow-line"/> THE R0CHA COINS</div><h2>Painel <em>administrativo</em></h2>{!authenticated?<><p className="admin-hint">Acesso demonstrativo da interface. Configure autenticação segura no backend antes de publicar.</p><label>Senha de demonstração</label><input type="password" value={adminPass} onChange={e=>setAdminPass(e.target.value)} placeholder="Digite: admin123"/><button className="primary-btn full" onClick={()=>{if(adminPass==='admin123')setAuthenticated(true);else setNotice('Senha de demonstração incorreta.')}}>ENTRAR <ArrowUpRight size={16}/></button></>:<><p className="admin-hint">Edite os preços exibidos na vitrine. Alterações ficam no navegador até integração com a API.</p>{products.map(p=><div className="admin-product" key={p.id}><span>{p.coins} Coins</span><div><b>R$</b><input value={drafts[p.id]??p.price} onChange={e=>setDrafts(d=>({...d,[p.id]:e.target.value}))}/><button onClick={()=>savePrice(p.id)}>Salvar</button></div></div>)}<button className="logout" onClick={()=>setAuthenticated(false)}>Sair do painel</button></>}{notice&&<p className="notice">{notice}</p>}</div></div>}
  </div>
}
export default App;
