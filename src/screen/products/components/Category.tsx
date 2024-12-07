import { SliderWrap } from '@/components/SliderWrap';
import { useCategoryListQuery } from '@/gql/graphql';
import { useTranslations } from 'next-intl';
import React, { useEffect, useRef } from 'react';

interface Props {
  productGroup: any[];
  selected: any;
  onSelected: any
}

export function Category(props: Props) {
  const t = useTranslations("HomePage");
  const mediaScrollRef = useRef<HTMLUListElement>();

  const { data, loading } = useCategoryListQuery();

  useEffect(() => {
    if (process) {
      let fetchLoading = false;
      const threshold = 100;
      const onScroll = () => {
        if (mediaScrollRef?.current) {
          const diff =
            mediaScrollRef?.current?.scrollWidth -
            mediaScrollRef?.current?.scrollLeft -
            mediaScrollRef?.current.offsetWidth;

          if (diff < threshold && !fetchLoading) {
            fetchLoading = true;
          }
        }
      };
      mediaScrollRef?.current?.addEventListener('scroll', onScroll);
      return () => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        mediaScrollRef?.current?.removeEventListener('scroll', onScroll);
      };
    }
  }, []);

  if (loading || !data) {
    return <div></div>
  }

  const category = data?.categoryList.hash[0].children

  return (
    <div className={'Action_slider_Wrap'}>
      <ul ref={mediaScrollRef as any} className="Action_slider gap-4">
        <SliderWrap dataLenght={category.length} disable={false}>
          <li
            className={`p-3 hover:bg-emerald-700 font-bold cursor-pointer ${props.selected === null ? 'bg-emerald-700 text-white' : ''
              }`}
            onClick={() => {
              props.onSelected && props.onSelected(null);
            }}
          >
            {t('all')}
          </li>
          {category.map((c: any) => {
            const count = props.productGroup ? (props.productGroup[c.name] || []).length : 0;
            return (
              <li
                key={c.id}
                className={`p-3 hover:bg-emerald-700 font-bold cursor-pointer ${props.selected && props.selected.name === c.name ? 'bg-emerald-700 text-white' : ''
                  } ${count === 0 ? 'hidden' : ''}`}
                onClick={() => {
                  props.onSelected && props.onSelected(c);
                }}
              >
                {c.name} {count > 0 ? `(${count})` : ''}
              </li>
            );
          })}
        </SliderWrap>
      </ul>
    </div>
  )
}