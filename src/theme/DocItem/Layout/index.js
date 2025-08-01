import React from 'react';
import clsx from 'clsx';
import { useWindowSize } from '@docusaurus/theme-common';
import { useDoc } from '@docusaurus/theme-common/internal';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemContent from '@theme/DocItem/Content';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import Unlisted from '@theme/Unlisted';
import TOC from '@theme/TOC';
import styles from './styles.module.css';
/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */
function useDocTOC() {
	const { frontMatter, toc } = useDoc();
	const windowSize = useWindowSize();
	const hidden = frontMatter.hide_table_of_contents;
	const canRender = !hidden && toc.length > 0;
	const mobile = canRender && windowSize === 'mobile' ? <TOC toc={toc} /> : undefined;
	const desktop =
		canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? (
			<TOC toc={toc} />
		) : undefined;
	return {
		hidden,
		mobile,
		desktop,
	};
}
export default function DocItemLayout({ children }) {
	const docTOC = useDocTOC();
	const {
		metadata: { unlisted, formattedLastUpdatedAt },
	} = useDoc();
	const { metadata } = useDoc();


	return (
		<div className="row">
			<div className={clsx('col', !docTOC.hidden && styles.docItemCol)}>
				{unlisted && <Unlisted />}
				<DocVersionBanner />
				<div className={styles.docItemContainer}>
					<article>
						<DocBreadcrumbs />
						<DocVersionBadge />
						{docTOC.mobile}
						<DocItemContent>{children}</DocItemContent>
						<DocItemFooter />
					</article>
					<DocItemPaginator className="helloWorld" />
				</div>
			</div>
			{docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
		</div>
	);
}
