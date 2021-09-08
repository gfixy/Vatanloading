<?php
/**
 * WordPress için başlangıç ayar dosyası.
 *
 * Bu dosya kurulum sırasında wp-config.php dosyasının oluşturulabilmesi için
 * kullanılır. İsterseniz bu dosyayı kopyalayıp, ismini "wp-config.php" olarak değiştirip,
 * değerleri girerek de kullanabilirsiniz.
 *
 * Bu dosya şu ayarları içerir:
 * 
 * * MySQL ayarları
 * * Gizli anahtarlar
 * * Veritabanı tablo ön eki
 * * ABSPATH
 * 
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL ayarları - Bu bilgileri servis sağlayıcınızdan alabilirsiniz ** //
/** WordPress için kullanılacak veritabanının adı */
define( 'DB_NAME', 'vatanload_db' );

/** MySQL veritabanı kullanıcısı */
define( 'DB_USER', 'root' );

/** MySQL veritabanı parolası */
define( 'DB_PASSWORD', '' );

/** MySQL sunucusu */
define( 'DB_HOST', 'localhost' );

/** Yaratılacak tablolar için veritabanı karakter seti. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Veritabanı karşılaştırma tipi. Herhangi bir şüpheniz varsa bu değeri değiştirmeyin. */
define( 'DB_COLLATE', '' );

/**#@+
 * Eşsiz doğrulama anahtarları ve tuzlar.
 *
 * Her anahtar farklı bir karakter kümesi olmalı!
 * {@link http://api.wordpress.org/secret-key/1.1/salt WordPress.org secret-key service} servisini kullanarak yaratabilirsiniz.
 * Çerezleri geçersiz kılmak için istediğiniz zaman bu değerleri değiştirebilirsiniz. Bu tüm kullanıcıların tekrar giriş yapmasını gerektirecektir.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'eO. X0f=Riue&3UX^xfh6UnU^CsVD?V?|VK2xbgVCH80{j :[y+op6 _lWgI8Qm|' );
define( 'SECURE_AUTH_KEY',  'vqATN1eZyg](fWwJivS?=(Fa_$o;08(94MkJ?F,Yxk&D+0cm<??LKGsbk|ik2i-l' );
define( 'LOGGED_IN_KEY',    'gR>e.SEzWh>Gu-(u`GI<Hr%+L]-WgXDLC6y*1k4<^T}J#<!Ici77YRQo!w&~5qWh' );
define( 'NONCE_KEY',        '2[0!Bam<^$5,/=+1WuF8Mk|@u8SSfSjTNQK%@/X|Sd*i>5rne1S*b`Dd*RoB1$1-' );
define( 'AUTH_SALT',        'yujvelT0*b_BO6xS10J:o@;eM&~+)Y [e](5UhvG*tY8X;O)N_,KEyOA]^X_y.]9' );
define( 'SECURE_AUTH_SALT', '&`T ~6j2G6>TKyp2^0u VS,0&a.:1u~jE>IA 3tF*50mgU@wiI_+zM_*vGVGG1Ps' );
define( 'LOGGED_IN_SALT',   'nw0_b{/W;Uu@GIP!S*PC-8om+wE=/1}eUNOE!Y_@Vt60@py9m6<KWREtZ6l._g(7' );
define( 'NONCE_SALT',       'ga,tb7Juh*>HWI wG[YUw9kLycgG3H8<[<A,9F7iC/|tdN-R8ovA_:u1Xi5j&jLg' );

/**#@-*/

/**
 * WordPress veritabanı tablo ön eki.
 *
 * Tüm kurulumlara ayrı bir önek vererek bir veritabanına birden fazla kurulum yapabilirsiniz.
 * Sadece rakamlar, harfler ve alt çizgi lütfen.
 */
$table_prefix = 'wp_';

/**
 * Geliştiriciler için: WordPress hata ayıklama modu.
 *
 * Bu değeri "true" yaparak geliştirme sırasında hataların ekrana basılmasını sağlayabilirsiniz.
 * Tema ve eklenti geliştiricilerinin geliştirme aşamasında WP_DEBUG
 * kullanmalarını önemle tavsiye ederiz.
 * 
 * Hata ayıklama için kullanabilecek diğer sabitler ile ilgili daha fazla bilgiyi
 * belgelerden edinebilirsiniz.
 * 
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Hepsi bu kadar. Mutlu bloglamalar! */

/** WordPress dizini için mutlak yol. */
if ( ! defined( 'ABSPATH' ) ) {
    define( 'ABSPATH', __DIR__ . '/' );
}

/** WordPress değişkenlerini ve yollarını kurar. */
require_once ABSPATH . 'wp-settings.php';